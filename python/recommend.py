import pandas as pd
from sqlalchemy import create_engine
from flask import Flask, request, jsonify
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from flask import Flask, request, jsonify
from flask_cors import CORS
from urllib.parse import quote_plus
import numpy as np
import mysql.connector


# Mã hóa mật khẩu
# password = quote_plus('findHome@2024')

# Tạo chuỗi kết nối
# engine = create_engine(f'mysql+pymysql://findHome:{password}@127.0.0.1:3307/findHome')

config = {
    'user': 'findHome',
    'password': 'findHome@2024',
    'host': '127.0.0.1',
    'database': 'findHome',
    'port': 3307,
    'raise_on_warnings': True
}

conn = mysql.connector.connect(**config)



# Kiểm tra kết nối
# try:
#     connection = engine.connect()
#     print("Connection successful!")
#     connection.close()
# except Exception as e:
#     print(f"Connection failed: {e}")

if conn.is_connected():
    print('Kết nối thành công vào MySQL Database')

# Đọc dữ liệu từ bảng userAction và posts
query1 = 'SELECT * FROM userAction'
query2 = 'SELECT id, typeRoom, price, area FROM posts'

user_interactions = pd.read_sql_query(query1, conn)
posts_info = pd.read_sql_query(query2, conn)

# Kết hợp các cột thông tin để tạo nội dung cho TF-IDF
posts_info['content'] = posts_info['typeRoom'] + ' ' + posts_info['price'].astype(str) + ' ' + posts_info['area'].astype(str)

# Tạo TF-IDF vectorizer và tính toán ma trận TF-IDF
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(posts_info['content'])

# Tính toán ma trận độ tương tự cosine
cosine_similarities = cosine_similarity(tfidf_matrix, tfidf_matrix)

def get_most_similar_posts(user_id, user_interactions, cosine_similarities, posts_info, n=5):
    # Lấy tất cả các postId mà user đã tương tác
    user_posts = user_interactions[user_interactions['userId'] == user_id]['postId'].tolist()
    
    if not user_posts:
        return None
    
    # Tính điểm tương tự của các bài viết trong db với các bài viết mà user đã tương tác
    sim_scores = np.zeros(cosine_similarities.shape[0])
    for post_id in user_posts:
        post_index = posts_info.index[posts_info['id'] == post_id].tolist()[0]
        sim_scores += cosine_similarities[post_index]
    
    # Tính trung bình
    sim_scores /= len(user_posts)
    
    # Sắp xếp các bài đăng dựa trên điểm tương tự trung bình
    sim_scores = list(enumerate(sim_scores))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Lấy n bài đăng có điểm tương tự cao nhất (trừ các bài đăng đã tương tác)
    top_indices = [i[0] for i in sim_scores if posts_info.iloc[i[0]]['id'] not in user_posts][:n]
    top_post_ids = posts_info.iloc[top_indices]['id'].tolist()
    
    return top_post_ids

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return "Welcome to FindHome"
# Route để nhận yêu cầu từ React
@app.route('/get-recommendation', methods=['GET'])
def get_recommendations():
    # Lấy user_id từ React qua query parameter
    api_url = request.args.get('id')
    user_id = int(api_url)
    
    if user_id:
        recommendations = get_most_similar_posts(user_id, user_interactions, cosine_similarities, posts_info)
        
        if recommendations:
            return jsonify({"postIds": recommendations})
        else:
            return jsonify({"message": "No interactions found for the user."}), 404
    else:
        return jsonify({"message": "Failed to retrieve user ID from API."}), 400
    

# Chạy server Flask
if __name__ == '__main__':
    app.run(debug=True , host="0.0.0.0", port=5000)

import pandas as pd
from flask import Flask, request, jsonify
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import mysql.connector
app = Flask(__name__)
CORS(app)

config = {
    'user': 'findHome',
    'password': 'findHome@2024',
    'host': '127.0.0.1',
    'database': 'findHome',
    'port': 3307,
    'raise_on_warnings': True
}
try:

    conn = mysql.connector.connect(**config)

    if conn.is_connected():
        print('recommned Kết nối thành công vào Database')

    query1 = 'SELECT * FROM userAction'
    #query2 = 'SELECT id, typeRoom, price, area FROM posts'
    query2='SELECT posts.id as id, posts.typeRoom as typeRoom, posts.price as price, posts.area as area FROM posts JOIN statusPost On posts.id = statusPost.postId Where statusPost.check = 1 and statusPost.status = 0'
    user_interactions = pd.read_sql_query(query1, conn)
    posts_info = pd.read_sql_query(query2, conn)
    posts_info['content'] = posts_info['typeRoom'] + ' ' + posts_info['price'].astype(str) + ' ' + posts_info['area'].astype(str)

    tfidf = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf.fit_transform(posts_info['content'])

    cosine_similarities = cosine_similarity(tfidf_matrix, tfidf_matrix)

    def get_most_similar_posts(user_id, user_interactions, cosine_similarities, posts_info, n=5):
        user_posts = user_interactions[user_interactions['userId'] == user_id]['postId'].tolist()
        
        if not user_posts:
            return None
        
        sim_scores = np.zeros(cosine_similarities.shape[0])
        for post_id in user_posts:
            post_index = posts_info.index[posts_info['id'] == post_id].tolist()[0]
            sim_scores += cosine_similarities[post_index]
        
        sim_scores /= len(user_posts)
        
        sim_scores = list(enumerate(sim_scores))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

        top_indices = [i[0] for i in sim_scores if posts_info.iloc[i[0]]['id'] not in user_posts][:n]
        top_post_ids = posts_info.iloc[top_indices]['id'].tolist()
        
        return top_post_ids

    @app.route('/')
    def index():
        return "Welcome to FindHome"
    @app.route('/get-recommendation', methods=['GET'])
    def get_recommendations():
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
except mysql.connector.Error as err:
        print(f"Lỗi recommend.py: {err}")

finally:
    if 'conn' in locals() and conn.is_connected():
        conn.close()    
    
    
if __name__ == '__main__':
    app.run(debug=True , host="0.0.0.0", port=5002)

import pandas as pd
from sqlalchemy import create_engine
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import StandardScaler
from urllib.parse import quote_plus
import numpy as np

# Mã hóa mật khẩu
password = quote_plus('findHome@2024')

# Tạo chuỗi kết nối
engine = create_engine(f'mysql+pymysql://findHome:{password}@localhost:3307/findHome')

# Kiểm tra kết nối
try:
    connection = engine.connect()
    print("Connection successful!")
    connection.close()
except Exception as e:
    print(f"Connection failed: {e}")


# Đọc dữ liệu từ bảng user_interactions và posts_info
user_interactions = pd.read_sql('SELECT * FROM userAction', engine)
posts_info = pd.read_sql('SELECT * FROM posts', engine)

common_post_ids = user_interactions['postId'].unique()
posts_info = posts_info[posts_info['id'].isin(common_post_ids)]

# Tạo ma trận user_post_matrix
user_post_matrix = user_interactions.pivot_table(index='userId', columns='postId', values='countAction', fill_value=0)

#Tạo ma trận cosine similarity
post_similarity_collab = cosine_similarity(user_post_matrix.T)
print("raw\n",user_post_matrix)
print("change\n", user_post_matrix.T)


# Content-Based Filtering: Chuẩn hóa các đặc trưng
# TfidfVectorizer cho 'tyRoom'
tfidf_vectorizer = TfidfVectorizer(stop_words='english')
tfidf_tyRoom = tfidf_vectorizer.fit_transform(posts_info['typeRoom'])
#StandardScaler cho 'price' và 'area'
scaler = StandardScaler()
scaled_price_area = scaler.fit_transform(posts_info[['price', 'area']])

# Kết hợp các đặc trưng thành một ma trận
combined_features = np.hstack((tfidf_tyRoom.toarray(), scaled_price_area))
print("compine\n",combined_features )


# Tính toán độ tương đồng dựa trên ma trận kết hợp
post_similarity_content = cosine_similarity(combined_features)


# Kết hợp Collaborative Filtering và Content-Based Filtering
combined_similarity = (post_similarity_collab + post_similarity_content) / 2
print

# Tạo hàm recommend
def recommend_posts(user_id, num_recommendations=5):
    user_index = user_post_matrix.index.get_loc(user_id)
    print("user_index\n", user_index)

    similarity_scores = list(enumerate(combined_similarity[user_index]))

    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
    recommended_posts = [i[0] for i in similarity_scores[:num_recommendations]]
    return posts_info['id'].iloc[recommended_posts]

 # Ví dụ sử dụng
if __name__ == "__main__":
    # user_id = int(sys.argv[1])
    recommendations = recommend_posts(70)
    print(recommendations.to_json(orient='records'))

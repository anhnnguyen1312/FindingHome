import mysql.connector
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, jsonify,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
config = {
    'user': 'findHome',
    'password': 'findHome@2024',
    'host': 'localhost',
    'database': 'findHome',
    'port': 3307,
    'raise_on_warnings': True
}
try:
    # Kết nối vào cơ sở dữ liệu
    conn = mysql.connector.connect(**config)

    if conn.is_connected():
        print('Kết nối thành công vào MySQL Database')

        # Thực hiện các thao tác truy vấn dữ liệu
        # cursor = conn.cursor()
        # cursor.execute('SELECT * FROM users')

        # Lấy kết quả
        # rows = cursor.fetchall()
        # for row in rows:
        #     print(row)
        query = "SELECT * FROM posts "
        query2 = "SELECT * FROM statusPost WHERE status='0' "
        df = pd.read_sql_query(query, conn)
        df2 = pd.read_sql_query(query2, conn)
        dfCheck = df2[df2['check'] == 1]
        index=dfCheck.index
        filtered_df = df.iloc[index]
        filtered_df.reset_index(inplace=True)
        print(filtered_df)
       
except mysql.connector.Error as err:
    print(f"Lỗi: {err}")

finally:
    # Đóng kết nối
    if 'conn' in locals() and conn.is_connected():
        # cursor.close()
        conn.close()
        print('Đã đóng kết nối đến MySQL Database')

print(filtered_df.head())

features = ['typeRoom','address','price','area','description']
# + " " + str(row['address']) 
def combineFeatures(row):
    return str(row['typeRoom']) + " " + str(row['address'])  + " " + str(row['price'])+ " " + str(row['area'])
filtered_df['combineFeatures'] =filtered_df.apply(combineFeatures,axis=1)
print(filtered_df['combineFeatures'].head())
tf = TfidfVectorizer ()
tfMatrix = tf.fit_transform(filtered_df['combineFeatures'])
similar = cosine_similarity(tfMatrix)

number = 5
@app.route('/')
def index():
    return "Welcome to FindHome"
@app.route('/recommend',methods=['GET'])
def call_api():
    result = []
    postId = request.args.get('id')
    postId =int(postId)
    if postId not in filtered_df['id'].values:
        return jsonify({'Error': 'bài đăng không hợp lệ'})
        
   
    indexPost = filtered_df[filtered_df['id'] == postId].index[0]
    print(indexPost)
    similarPost = list(enumerate(similar[indexPost]))
    print(similarPost)
    sortedSimilarPost = sorted(similarPost,key=lambda x:x[1], reverse=True)
    print(sortedSimilarPost)

    def id_post(index):
        return (filtered_df[filtered_df.index == index]['id'].values[0])
    for i in range(1,5):
        print(id_post(sortedSimilarPost[i][0]))
        result.append(int(id_post(sortedSimilarPost[i][0])))

    # result.remove(postId)
    return jsonify(result)
    
if __name__ == '__main__':
    app.run(debug=True)
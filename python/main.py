import mysql.connector
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, jsonify,request
from flask_cors import CORS
from sklearn.feature_extraction.text import CountVectorizer
# import gensim.downloader as api
import numpy as np
app = Flask(__name__)
CORS(app)
count_vectorizer = CountVectorizer()
# w2v_model = api.load('word2vec-google-news-300')
config = {
    'user': 'findHome',
    'password': 'findHome@2024',
    'host': 'localhost',
    'database': 'findHome',
    'port': 3307,
    'raise_on_warnings': True
}
# try:
#     # Kết nối vào cơ sở dữ liệu
#         conn = mysql.connector.connect(**config)

#         if conn.is_connected():
#             print('Kết nối thành công vào MySQL Database')

#         # Thực hiện các thao tác truy vấn dữ liệu
#         # cursor = conn.cursor()
#         # cursor.execute('SELECT * FROM users')

#         # Lấy kết quả
#         # rows = cursor.fetchall()
#         # for row in rows:
#         #     print(row)
#         query = "SELECT * FROM posts "
#         query2 = "SELECT * FROM statusPost WHERE status='0' "
#         df = pd.read_sql_query(query, conn)
#         df2 = pd.read_sql_query(query2, conn)
#         dfCheck = df2[df2['check'] == 1]
#         index=dfCheck.index
#         filtered_df = df.iloc[index]
#         filtered_df.reset_index(inplace=True)
#         print(filtered_df)
        
#     except mysql.connector.Error as err:
#         print(f"Lỗi: {err}")

#     finally:
#         # Đóng kết nối
#         if 'conn' in locals() and conn.is_connected():
#             # cursor.close()
#             conn.close()
#             print('Đã đóng kết nối đến MySQL Database')



#     features = ['typeRoom','address','price','area','description']
#     # + " " + str(row['address']) + " " + str(row['area']) str(row['typeRoom']) + " " + 
#     def combineFeatures(row):
#         return str(row['typeRoom']) + " " + str(row['address']) + " " + str(row['price'])
#     filtered_df['combineFeatures'] =filtered_df.apply(combineFeatures,axis=1)
#     print(filtered_df['combineFeatures'].head())
#     tf = TfidfVectorizer ()
#     tfMatrix = tf.fit_transform(filtered_df['combineFeatures'])
#     similar = cosine_similarity(tfMatrix)
#     print(filtered_df.head())
#     result = []
#     postId = request.args.get('id')
#     postId =int(postId)
#     if postId not in filtered_df['id'].values:
#         return jsonify({'Error': 'bài đăng không hợp lệ'})
        
   
#     indexPost = filtered_df[filtered_df['id'] == postId].index[0]
#     print(indexPost)
#     similarPost = list(enumerate(similar[indexPost]))
#     print(similarPost)
#     sortedSimilarPost = sorted(similarPost,key=lambda x:x[1], reverse=True)
#     print(sortedSimilarPost)


@app.route('/')
def index():
    return "Welcome to FindHome"
@app.route('/recommend',methods=['GET'])


def call_api():
    try:
    # Kết nối vào cơ sở dữ liệu
        conn = mysql.connector.connect(**config)
        if conn.is_connected():
            print('Kết nối thành công vào MySQL Database')
        query = "SELECT * FROM posts "
        query2 = "SELECT * FROM statusPost WHERE status='0' "
        query3 = "SELECT userId, GROUP_CONCAT(postId ORDER BY postId) AS postIds FROM userLikes GROUP BY userId"
        dfLike = pd.read_sql_query(query3, conn)
        df = pd.read_sql_query(query, conn)
        df2 = pd.read_sql_query(query2, conn)
        print(df2)
        dfCheck = df2[df2['check'] == 1]
        print(df2)
        index=dfCheck['postId']
        print(index)
        # filtered_df = df.iloc[index]
        filtered_df = df[df['id'].isin(index)]
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


    def combineFeatures(row):
                print(str(row['typeRoom']) + " " + str(row['price']) + " " + str(row['address']).split(',')[2] + " " + str(row['address']).split(',')[1] + " " + str(row['address']).split(',')[0] )
                return str(row['typeRoom']) + " " + str(row['price']) + " " + str(row['address']).split(',')[2] + " " + str(row['address']).split(',')[1] + " " + str(row['address']).split(',')[0] 
                
    features = ['typeRoom','address','price','area','description']
    # + " " + str(row['address']) + " " + str(row['area']) str(row['typeRoom']) + " " + 
    #        return str(row['typeRoom']) + " " + str(row['address']) + " " + str(row['price']) + " " + str(row['address']).split(',')[0]

    # def combineFeatures(row):
    #     print(str(row['typeRoom']) + " " + str(row['price']) + " " + str(row['address']).split(',')[3] + " " + str(row['address']).split(',')[2] + " " + str(row['address']).split(',')[1] + " " + str(row['address']).split(',')[0] )
    #     return str(row['typeRoom']) + " " + str(row['price']) + " " + str(row['address']).split(',')[3] + " " + str(row['address']).split(',')[2] + " " + str(row['address']).split(',')[1] + " " + str(row['address']).split(',')[0]  
        
    # filtered_df['combineFeatures'] =filtered_df.apply(combineFeatures,axis=1)
    # print(filtered_df['combineFeatures'].head())
    # tf = TfidfVectorizer ()
    # tfMatrixPost = tf.fit_transform(filtered_df['combineFeatures'])
    # similarCosin = cosine_similarity(tfMatrixPost)
    # tfMatrixUser = tf.fit_transform(dfLike['postIds'])
    # similarUserCosin = cosine_similarity(tfMatrixUser)
    
    id = request.args.get('id')
    
    if id:
        # Chuyển đổi chuỗi thành mảng các số nguyên
        data_array = [int(item) for item in id.split(',')]
        
        # Xử lý dữ liệu ở đây (ví dụ: in ra mảng)
        print("Received data array:", data_array)
        postId=data_array[0]
        userId=data_array[1]

    # postId =int(postId)
    print(postId, userId)
    resultPostId = []
    resultUserId = []
    if postId not in filtered_df['id'].values:
        return jsonify({'Error': 'bài đăng không hợp lệ'})
    if userId not in dfLike['userId'].values:
         # tính cosin-similar với  post 
        # lọc recommend theo tỉnh - tp
        def combineFeatures_province(row):
            print(str(row['address']).split(',')[3] )
            return str(row['address']).split(',')[3] 
            
        filtered_df['combineFeaturesProvince'] =filtered_df.apply(combineFeatures_province,axis=1)
        print(filtered_df['combineFeaturesProvince'].head())
        tf = TfidfVectorizer ()
        tfMatrixPost_province = tf.fit_transform(filtered_df['combineFeaturesProvince'])
        similarCosin_province = cosine_similarity(tfMatrixPost_province)
        indexPost = filtered_df[filtered_df['id'] == postId].index[0]
        print(indexPost)
        similarPost_province = list(enumerate(similarCosin_province[indexPost]))
        print(similarPost_province)
        sortedSimilarPost_province = sorted(similarPost_province,key=lambda x:x[1], reverse=True)
        print(sortedSimilarPost_province)
        #province_similar_index= sortedSimilarPost_province[1][1]
        province_similar_index=[]
        for i in range(0,len(sortedSimilarPost_province)):
            if int(sortedSimilarPost_province[i][1]) == 1 :
                province_similar_index.append(int(sortedSimilarPost_province[i][0]))
        print(province_similar_index)

        province_similar_df = filtered_df.iloc[province_similar_index]
        province_similar_df.reset_index(inplace=True)
        print(province_similar_df)
        province_similar_df.drop('index', axis=1)

        # nếu nhiều hơn 10 post trong tỉnh/tp đó
        if len(province_similar_index) > 7:
            print(len(province_similar_index))
            number = 5 - len(province_similar_index)
            def combineFeatures_district(row):
                district = str(row['address']).split(',')[2]
                print(district)
                return district 
            province_similar_df['combineFeatures_district'] =province_similar_df.apply(combineFeatures_district,axis=1)
            print(province_similar_df['combineFeatures_district'])
            province_similar_df['combineFeatures_district'] = province_similar_df['combineFeatures_district'].replace({'1': 'Một', '2': 'Hai','3':'Ba','4': 'Bốn','5': 'Năm','6': 'Sáu','7': 'Bảy','8': 'Tám','9' :'Chín','10': 'Mười','11': 'Mười Một','12': 'Mười Hai'}, regex=True)
            print(province_similar_df['combineFeatures_district'])
            tf = TfidfVectorizer ()
            tfMatrixPost_district = tf.fit_transform(province_similar_df['combineFeatures_district'])
            bow_matrix = count_vectorizer.fit_transform(province_similar_df['combineFeatures_district'])
            print(tfMatrixPost_district)
            similarCosin_district = cosine_similarity(tfMatrixPost_district)
            indexPost = province_similar_df[province_similar_df['id'] == postId].index[0]
            print(indexPost)
            similarPost_district = list(enumerate(similarCosin_district[indexPost]))
            print(similarPost_district)
            sortedSimilarPost_district = sorted(similarPost_district,key=lambda x:x[1], reverse=True)
            print(sortedSimilarPost_district)
            district_similar_index=[]
            for i in range(0,len(sortedSimilarPost_district)):
                if int(sortedSimilarPost_district[i][1]) == 1 :
                    district_similar_index.append(int(sortedSimilarPost_district[i][0]))
            print(district_similar_index)
            province_similar_df = province_similar_df[['id','userId','address','typeRoom','price','combineFeaturesProvince','combineFeatures_district']]
            print(province_similar_df)
            district_similar_df = province_similar_df.iloc[district_similar_index]
            district_similar_df.reset_index(inplace=True)
            print(district_similar_df)

            if len(district_similar_index) > 5:
                # lọc recommend theo type, price, xã
                def combineFeatures_district_all(row):
                    price = str(row['price'])  + " " + str(row['typeRoom']) + " " + str(row['address']).split(',')[0] + " " + str(row['address']).split(',')[1]
                    print(price)
                    return price 
                district_similar_df['combineFeatures_district_all'] =district_similar_df.apply(combineFeatures_district_all,axis=1)
                print(district_similar_df['combineFeatures_district_all'])
                district_similar_df['combineFeatures_district_all'] = district_similar_df['combineFeatures_district_all'].replace({'1': 'Một', '2': 'Hai','3':'Ba','4': 'Bốn','5': 'Năm','6': 'Sáu','7': 'Bảy','8': 'Tám','9' :'Chín','0': 'Không'}, regex=True)
                print(district_similar_df['combineFeatures_district_all'])
                tf = TfidfVectorizer ()
                tfMatrixPost_district_all = tf.fit_transform(district_similar_df['combineFeatures_district_all'])
                print(tfMatrixPost_district_all)
                similarCosin_district_all = cosine_similarity(tfMatrixPost_district_all)
                indexPost = district_similar_df[district_similar_df['id'] == postId].index[0]
                print(indexPost)
                similarPost_district_all = list(enumerate(similarCosin_district_all[indexPost]))
                print(similarPost_district_all)
                sortedSimilarPost_district_all = sorted(similarPost_district_all,key=lambda x:x[1], reverse=True)
                print(sortedSimilarPost_district_all)
                def id_post_district(index):
                    return (district_similar_df[district_similar_df.index == index]['id'].values[0])
            
                for i in range(0,5):
                    print(id_post_district(sortedSimilarPost_district_all[i][0]))
                    resultPostId.append(int(id_post_district(sortedSimilarPost_district_all[i][0])))
                resultPostId.remove(postId)
            else :
                print('<5')
                # lấy hết district - lấy phần còn lại 

                def id_post(index):
                    return (province_similar_df[province_similar_df.index == index]['id'].values[0])
                for i in district_similar_index:
                    print(i)
                    resultPostId.append(int(id_post(i)))
                resultPostId.remove(postId)
                # lấy tỉnh,tp type price 
                def combineFeatures_province_all(row):
                    price = str(row['price'])  + " " + str(row['typeRoom']) 
                    print(price)
                    return price 
                province_similar_df['combineFeatures_province_all'] =province_similar_df.apply(combineFeatures_province_all,axis=1)
                print(province_similar_df['combineFeatures_province_all'])
                province_similar_df['combineFeatures_province_all'] = province_similar_df['combineFeatures_province_all'].replace({'1': 'Một', '2': 'Hai','3':'Ba','4': 'Bốn','5': 'Năm','6': 'Sáu','7': 'Bảy','8': 'Tám','9' :'Chín','0': 'Không'}, regex=True)
                print(province_similar_df['combineFeatures_province_all'])
                tf = TfidfVectorizer ()
                tfMatrixPost_province_all = tf.fit_transform(province_similar_df['combineFeatures_province_all'])
                print(tfMatrixPost_province_all)
                similarCosin_province_all = cosine_similarity(tfMatrixPost_province_all)
                indexPost = province_similar_df[province_similar_df['id'] == postId].index[0]
                print(indexPost)
                similarPost_province_all = list(enumerate(similarCosin_province_all[indexPost]))
                print(similarPost_province_all)
                sortedSimilarPost_province_all = sorted(similarPost_province_all,key=lambda x:x[1], reverse=True)
                print(sortedSimilarPost_province_all)
                def id_post_province(index):
                    return (province_similar_df[province_similar_df.index == index]['id'].values[0])

                for i in range(0,len(sortedSimilarPost_province_all)):
                        if len(resultPostId) == 5:
                            return jsonify({'postId': resultPostId})
                        print(int(id_post_province(sortedSimilarPost_province_all[i][0])))
                        if int(id_post_province(sortedSimilarPost_province_all[i][0])) not in resultPostId and int(id_post_province(sortedSimilarPost_province_all[i][0])) !=  postId :
                            resultPostId.append(int(id_post_province(sortedSimilarPost_province_all[i][0])))

                resultPostId.remove(postId)

                print(resultPostId)


        else :
        # lọc recommend theo type, price, huyện, xã
            
            province_similar_df['combineFeatures'] =province_similar_df.apply(combineFeatures,axis=1)
            print(province_similar_df['combineFeatures'].head())
            tf = TfidfVectorizer ()
            tfMatrixPost = tf.fit_transform(province_similar_df['combineFeatures'])
            similarCosin = cosine_similarity(tfMatrixPost)
            indexPost = province_similar_df[province_similar_df['id'] == postId].index[0]
            print(indexPost)
            similarPost = list(enumerate(similarCosin[indexPost]))
            print(similarPost)
            sortedSimilarPost = sorted(similarPost,key=lambda x:x[1], reverse=True)
            print(sortedSimilarPost)
            def id_post(index):
                return (province_similar_df[province_similar_df.index == index]['id'].values[0])
            
            if len(sortedSimilarPost) > 5 :
                n = 5
            else :
                n = len(sortedSimilarPost)

            for i in range(0,n):
                print(id_post(sortedSimilarPost[i][0]))
                resultPostId.append(int(id_post(sortedSimilarPost[i][0])))
            resultPostId.remove(postId)

            def id_post_province(index):
                return (filtered_df[filtered_df.index == index]['id'].values[0])
            if len(resultPostId) < 5:
                #lấy từ post tỉnh tp
                # number = 5 - len(resultPostId)
                # print(number)
                # for i in range(len(province_similar_index),number + len(province_similar_index)):
                #     resultPostId.append(int(id_post_province(sortedSimilarPost_province[i][0])))
                # lấy từ price type address
                filtered_df['combineFeatures'] =filtered_df.apply(combineFeatures,axis=1)
                print(filtered_df['combineFeatures'].head())
                tf = TfidfVectorizer ()
                tfMatrixPost = tf.fit_transform(filtered_df['combineFeatures'])
                similarCosin = cosine_similarity(tfMatrixPost)
                indexPost = filtered_df[filtered_df['id'] == postId].index[0]
                print(indexPost)
                similarPost = list(enumerate(similarCosin[indexPost]))
                
                sortedSimilarPost = sorted(similarPost,key=lambda x:x[1], reverse=True)
                print(sortedSimilarPost)

                for i in range(0,len(sortedSimilarPost)):
                    if len(resultPostId) == 5:
                        return jsonify({'postId': resultPostId})
                    print(int(id_post_province(sortedSimilarPost[i][0])))
                    if int(id_post_province(sortedSimilarPost[i][0])) not in resultPostId and int(id_post_province(sortedSimilarPost[i][0])) !=  postId :
                        
                        print(int(id_post_province(sortedSimilarPost[i][0])))
                        resultPostId.append(int(id_post_province(sortedSimilarPost[i][0])))
        return jsonify({'postId': resultPostId})
   
    #tính cả 2
    #postId
    # indexPost = filtered_df[filtered_df['id'] == postId].index[0]
    # print(indexPost)
    # similarPost = list(enumerate(similarCosin[indexPost]))
    # print(similarPost)
    # sortedSimilarPost = sorted(similarPost,key=lambda x:x[1], reverse=True)
    # print(sortedSimilarPost)
    # def id_post(index):
    #     return (filtered_df[filtered_df.index == index]['id'].values[0])
    # for i in range(1,4):
    #     print(id_post(sortedSimilarPost[i][0]))
    #     resultPostId.append(int(id_post(sortedSimilarPost[i][0])))

    # # #userId
    # indexUser = dfLike[dfLike['userId'] == userId].index[0]
    # print(indexUser)
    # similarUser = list(enumerate(similarUserCosin[indexUser]))
    # print(similarUser)
    # sortedSimilarUser = sorted(similarUser,key=lambda x:x[1], reverse=True)
    # print(sortedSimilarUser)

    # def id_user(index):
    #     #print(dfLike[dfLike.index == index]['userId'])
    #     return (dfLike[dfLike.index == index]['userId'].values[0])
    # for i in range(1,2):
    #     print(id_user(sortedSimilarUser[i][0]))
    #     resultUserId.append(int(id_user(sortedSimilarUser[i][0])))
    # # result.remove(postId)
    # handle userId to postId
    # print(dfLike[dfLike['userId'] == userId].values[0]) 
    # userIdPost = dfLike[dfLike['userId'] == userId].values[0]
    # print(dfLike[dfLike['userId'] == resultUserId].values[0])
    #return jsonify({'postId': resultPostId,'userId': resultUserId })
    
if __name__ == '__main__':
    app.run(debug=True)
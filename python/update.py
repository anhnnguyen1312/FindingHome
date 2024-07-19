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
tf = TfidfVectorizer ()
config = {
    'user': 'findHome',
    'password': 'findHome@2024',
    'host': 'findHome',
    'database': 'findHome',
    'raise_on_warnings': True
}

def combineFeatures_type_price_address(row):
    features= str(row['typeRoom']) + " " + str(row['price']) + " " + str(row['address']).split(',')[2] + " " + str(row['address']).split(',')[1] + " " + str(row['address']).split(',')[0]
    return features
def combineFeatures_district(row):
    features = str(row['address']).split(',')[2]
    return features   
def combineFeatures_province(row):
    features = str(row['address']).split(',')[3]
    return features
def combineFeatures_district_all(row):
    features = str(row['price'])  + " " + str(row['typeRoom']) + " " + str(row['address']).split(',')[0] + " " + str(row['address']).split(',')[1]
    return features  
def combineFeatures_type_price(row):
    features = str(row['price'])  + " " + str(row['typeRoom']) 
    return features           
def id_post(index,dataframe):
    return (dataframe[dataframe.index == index]['id'].values[0])
def id_user(index,dataframe):
    return (dataframe[dataframe.index == index]['userId'].values[0])
def calc_similarity(dataframe,combineFeatures,postId):
    dataframe['combineFeatures'] =dataframe.apply(combineFeatures,axis=1)
    dataframe['combineFeatures'] = dataframe['combineFeatures'].replace({'1': 'Một', '2': 'Hai','3':'Ba','4': 'Bốn','5': 'Năm','6': 'Sáu','7': 'Bảy','8': 'Tám','9' :'Chín','0': 'Không'}, regex=True)
    tfMatrixPost = tf.fit_transform(dataframe['combineFeatures'])
    similarCosin = cosine_similarity(tfMatrixPost)
    indexPost = dataframe[dataframe['id'] == postId].index[0]
    similarPost = list(enumerate(similarCosin[indexPost]))
    sortedSimilarPost = sorted(similarPost,key=lambda x:x[1], reverse=True)
    return sortedSimilarPost
def get_index_similarity1(sortedSimilarity):
    index_array=[]
    for i in range(0,len(sortedSimilarity)):
        if int(sortedSimilarity[i][1]) == 1 :
            index_array.append(int(sortedSimilarity[i][0]))
    return index_array
def get_index(sortedSimilarPost,dataframe,postId,n,post):
    result=[]
    for i in range(0,len(sortedSimilarPost)):
        if len(result) == n:
            return result
        if  int(id_post(sortedSimilarPost[i][0],dataframe)) not in post and int(id_post(sortedSimilarPost[i][0],dataframe)) != postId:
            result.append(int(id_post(sortedSimilarPost[i][0],dataframe)))


def create_df_from_index(index,sourceDf):
    similar_df = sourceDf.iloc[index]
    similar_df.reset_index(inplace=True)
    similar_df = similar_df[['id','userId','address','typeRoom','price']]
    return similar_df
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
        query2 = "SELECT * FROM statusPost WHERE status='0'"
        query3 = "SELECT userId, GROUP_CONCAT(postId ORDER BY postId) AS postIds FROM userLikes GROUP BY userId"
        dfLike = pd.read_sql_query(query3, conn)
        df = pd.read_sql_query(query, conn)
        df2 = pd.read_sql_query(query2, conn)
        dfCheck = df2[df2['check'] == 1]
        index=dfCheck['postId']
        filtered_df = df[df['id'].isin(index)]
        filtered_df.reset_index(inplace=True)
        filtered_df = filtered_df[['id','userId','address','typeRoom','price']]        
        resultPostId = []
        resultUserId = []
        resultPostbyUserId = []

        postID_number = []
        id = request.args.get('id')
        if id:
            data_array = [item for item in id.split(',')]
            postId=int(data_array[0])
            userId=None
            if data_array[1] != "null" :
                userId=int(data_array[1])
        
        if postId not in filtered_df['id'].values:
            return jsonify({'Error': 'bài đăng không hợp lệ'})
        if userId not in dfLike['userId'].values:
            postID_number =5
        else:
            postID_number = 3
        if len(filtered_df) > 0:
            if  postID_number == 3 :
                # tinh userId
                indexUser = dfLike[dfLike['userId'] == userId].index[0]
                tfMatrixUser = tf.fit_transform(dfLike['postIds'])
                similarUserCosin = cosine_similarity(tfMatrixUser)
                similarUser = list(enumerate(similarUserCosin[indexUser]))
                sortedSimilarUser = sorted(similarUser,key=lambda x:x[1], reverse=True)
                for i in range(1,len(sortedSimilarUser)):
                    if float(sortedSimilarUser[i][1]) > 0 and int(id_user(sortedSimilarUser[i][0],dfLike)) != userId :
                        resultUserId.append(int(id_user(sortedSimilarUser[i][0],dfLike)))
                #postsUser = dfLike[dfLike['userId'] == userId]['postIds']
                postUser = dfLike.loc[dfLike['userId'] == userId, 'postIds'].tolist()
                postUser = postUser[0].split(',')
                postUserRecommend=[]
                for i in resultUserId:
                    data=  (dfLike.loc[dfLike['userId'] == i, 'postIds'].tolist())
                    split_list = data[0].split(',')
                    postUserRecommend = postUserRecommend + split_list
                for i in postUserRecommend:
                    if i not in postUser :
                        resultPostbyUserId.append(i)
                if len(resultPostbyUserId) > 2:
                    resultPostbyUserId= resultPostbyUserId[:2]
                elif len(resultPostbyUserId) == 1:
                    postID_number = 4
                elif len(resultPostbyUserId) == 0:
                    postID_number = 5
            #return jsonify({'postId': resultPostId,'userId': resultPostbyUserId })
        
            sortedSimilarPost_province = calc_similarity(filtered_df,combineFeatures_province,postId)
            province_similar_index = get_index_similarity1(sortedSimilarPost_province)
            province_similar_df = create_df_from_index(province_similar_index,filtered_df)

            if len(province_similar_index) == 1 :
                sortedSimilarPost = calc_similarity(filtered_df,combineFeatures_type_price,postId)
                n= postID_number
                post=[]
                resultPostId = get_index(sortedSimilarPost,filtered_df,postId,n,post)
                #return jsonify({'postId tỉnh = 1': resultPostId})
                # for i in range(0,len(sortedSimilarPost)):
                #     if len(resultPostId) == 5:
                #         return jsonify({'postId': resultPostId})
                #     if int(id_post(sortedSimilarPost[i][0],filtered_df)) != postId:
                #         resultPostId.append(int(id_post(sortedSimilarPost[i][0],filtered_df)))
            elif len(province_similar_index) > 1 and len(province_similar_index) < (postID_number + 2):
                post = province_similar_df['id'].tolist()
                post.remove(postId)
                result=[]
                if len(post) < postID_number :
                    n = postID_number - len(post)
                    sortedSimilarPost = calc_similarity(filtered_df,combineFeatures_type_price,postId)
                    result = get_index(sortedSimilarPost,filtered_df,postId,n,post)
                resultPostId = post + result
                #return jsonify({'postId 1<tỉnh <7/5': resultPostId})
            elif len(province_similar_index) >= postID_number + 2:
                # tính theo quận / huyện
                sortedSimilarPost_district = calc_similarity(province_similar_df,combineFeatures_district,postId)
                district_similar_index = get_index_similarity1(sortedSimilarPost_district)
                district_similar_df = create_df_from_index(district_similar_index,province_similar_df)
                if len(district_similar_index) == 1:
                    sortedSimilarPost = calc_similarity(province_similar_df,combineFeatures_type_price,postId)
                    n= postID_number
                    post=[]
                    resultPostId = get_index(sortedSimilarPost,province_similar_df,postId,n,post)
                    #return jsonify({'postId quận = 1': resultPostId})
                elif 1<len(district_similar_index) < postID_number + 2:
                    post = district_similar_df['id'].tolist()
                    post.remove(postId)
                    result=[]
                    if len(post) < postID_number :
                        n = postID_number - len(post)
                        sortedSimilarPost = calc_similarity(province_similar_df,combineFeatures_type_price,postId)
                        result = get_index(sortedSimilarPost,province_similar_df,postId,n,post)
                    resultPostId = post + result
                    #return jsonify({'postId < 1quận <7': resultPostId})
                elif len(district_similar_index) >= postID_number + 2:
                    sortedSimilarPost_district_all = calc_similarity(district_similar_df,combineFeatures_district_all,postId)
                    n=postID_number
                    post=[]
                    resultPostId = (get_index(sortedSimilarPost_district_all,district_similar_df,postId,n,post))
                    # resultPostId = data
                    #return jsonify({'postId quận > 7': resultPostId})
            return jsonify({'postId': resultPostId,'userId': resultUserId })
        else:
            # tinhs car postID userID

            return jsonify({'postId': resultPostId,'userId': resultUserId })
    except mysql.connector.Error as err:
        print(f"Lỗi: {err}")

    finally:
        # Đóng kết nối
        if 'conn' in locals() and conn.is_connected():
            # cursor.close()
            conn.close()    
    
if __name__ == '__main__':
    app.run(debug=True , host="0.0.0.0", port=5001)

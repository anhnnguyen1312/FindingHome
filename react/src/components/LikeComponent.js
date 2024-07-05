import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {callApihandleLikePost, callApiCheckLikePost} from "../api/getPostApi";
const LikeComponent = ({postId}) => {
  const stateAuth = useSelector((state) => state.auth);
  
  const userId = stateAuth.data.userId

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    checkLiked()
  },[postId, userId])

  const checkLiked = async () =>{
    try{
      const payload = {
        userId: userId,
        postId: postId,
      };
      const response = await callApiCheckLikePost(payload)
      if(response.data.isLike){
        setIsLike(true)
      }
    }catch (error){
      console.error(error);
    }
  }

  const handleLike = async (e, postId, userId) => {
    e.stopPropagation();
    try {
      const payload = {
        userId: userId,
        postId: postId,
      };
      const response = await callApihandleLikePost(payload);
      console.log("checklike", response);
      if(response.data.isLike){
        setIsLike(true)
      }
      else if(response.data.isUnLike){
        setIsLike(false)
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
      <span
        className="text-yellow-500 flex-col flex"
        onClick = {(e) => handleLike(e, postId, userId)}
      >
        {isLike ? (
          <i className="fa-solid fa-star fa-lg"></i>
        ) : (
          <i className="fa-regular fa-star fa-lg"></i>
        )}
      </span>
  );
};

export default LikeComponent;

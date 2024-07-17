import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {callApihandleLikePost, callApiCheckLikePost} from "../api/getPostApi";
import {callUserAction} from "../api/getRecommendation";

const LikeComponent = ({postId}) => {
  const stateAuth = useSelector((state) => state.auth);

  const userId = stateAuth.data.userId;

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    checkLiked();
  }, [postId, userId]);

  const checkLiked = async () => {
    try {
      const payload = {
        userId: userId,
        postId: postId,
      };
      const response = await callApiCheckLikePost(payload);
      if (response.data.isLike) {
        setIsLike(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async (e, postId, userId) => {
    e.stopPropagation();
    try {
      const payload = {
        userId: userId,
        postId: postId,
      };
      const response = await callApihandleLikePost(payload);
      if (response.data.isLike) {
        setIsLike(true);
      } else if (response.data.isUnLike) {
        setIsLike(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleUserAction = async (postId, userId) => {
    try {
      const payload = {
        userId: userId,
        postId: postId,
      }
      if(!isLike){
        const response = await callUserAction(payload);
        if(response.data.success){
          const success = response.data.success
          console.log(success)
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <span
        className="text-yellow-500 flex-col flex"
        onClick = {(e) => {
          handleLike(e, postId, userId)
          handleUserAction(postId, userId )
        }}
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

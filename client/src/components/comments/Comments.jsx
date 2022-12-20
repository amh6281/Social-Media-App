import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import "moment/locale/ko";
import moment from "moment";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="댓글을 입력하세요..." />
        <button>추가</button>
      </div>
      {data.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{moment(post.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;

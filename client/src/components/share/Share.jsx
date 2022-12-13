import React, { useState } from "react";
import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ desc });
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder="무슨 생각을 하고 계신가요?"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>사진 추가</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>장소 추가</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>친구 태그</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>작성하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

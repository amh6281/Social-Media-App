import React from "react";
import "./leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              alt=""
            />
            <span>가나다</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>친구</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>그룹</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>마켓</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch 동영상</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>과거의 오늘</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>바로가기</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>이벤트</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>게임</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>갤러리</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>릴스</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>메시지</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>기타</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>기부</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>사용법</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>포인트</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;

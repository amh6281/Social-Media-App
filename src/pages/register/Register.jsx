import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptatum itaque, sapiente officiis odio provident quam aspernatur
            quae accusamus laudantium quos! Fugit nam itaque beatae? Molestiae
            eum nemo quam mollitia.
          </p>
          <span>계정이 있으신가요?</span>
          <button>로그인</button>
        </div>
        <div className="right">
          <h1>회원가입</h1>
          <form>
            <input type="text" placeholder="아이디" />
            <input type="text" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <input type="text" placeholder="이름" />
            <button>회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

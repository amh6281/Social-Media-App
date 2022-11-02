import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptatum itaque, sapiente officiis odio provident quam aspernatur
            quae accusamus laudantium quos! Fugit nam itaque beatae? Molestiae
            eum nemo quam mollitia.
          </p>
          <span>계정이 없으신가요?</span>
          <button>회원가입</button>
        </div>
        <div className="right">
          <h1>로그인</h1>
          <form>
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="PW" />
            <button>로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

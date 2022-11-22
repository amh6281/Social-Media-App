import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

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
          <Link to="/register">
            <button>회원가입</button>
          </Link>
        </div>
        <div className="right">
          <h1>로그인</h1>
          <form>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button onClick={handleLogin}>로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

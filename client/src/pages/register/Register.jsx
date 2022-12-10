import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

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
          <Link to="/login">
            <button>로그인</button>
          </Link>
        </div>
        <div className="right">
          <h1>회원가입</h1>
          <form>
            <input
              type="text"
              placeholder="아이디"
              name="username"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="이메일"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="이름"
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

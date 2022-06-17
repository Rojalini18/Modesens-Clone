import { React } from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import loginPic from "../images/modes.jpg";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Login = ({ isShowLogin }) => {
  const { handleAuth } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const { className, value } = e.target;
    setLoginData({
      ...loginData,
      [className]: value,
    });
  };
  console.log("loginData", loginData);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userArr = JSON.parse(localStorage.getItem("userDatas"));
    console.log("loginDataafter", loginData);
    console.log("userArr", userArr);
    if (
      userArr.some(
        (users) =>
          users.email === loginData.email &&
          users.password === loginData.password
      )
    ) {
      alert("Logged in successfully");
      <Navigate to="/" replace={false} />;
      window.location.href = "/";
    } else {
      alert("Validation failed");
    }
  };

  return (
    <div className={`${isShowLogin ? "active" : "notActive"} show`}>
      <div className="containerLogin">
        <div className="left">
          <img src={loginPic} alt="" />
        </div>
        <div className="rightWrapper">
          <div className="right">
            <div className="logInCompare">
              <h2>Log in to your account</h2>
              <p>Compare across 500+ stores to find the best price.</p>
            </div>

            <form className=" formData " onSubmit={handleSubmit}>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="email"
                value={loginData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                id="pass"
                placeholder="Password"
                className="password"
                value={loginData.password}
                onChange={handleChange}
              />
              <br />
              <span>Forgot password</span>
              <br />
              <input className="login" type="submit" value={"Log in"} />
            </form>
            <div className="orDiv">
              <div className="firsthr">
                <hr />
              </div>
              <div className="or">or</div>
              <div className="secondhr">
                <hr />
              </div>
            </div>
            <div className="logos">
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617google.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617facebook.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617apple.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://modesens.com/static/img/login-icon/20210617wechat.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

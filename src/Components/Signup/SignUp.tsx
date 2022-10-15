import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../../assets/newimages.avif";
import "./signup.css";
const SignUp = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const navigate = useNavigate();
  const [error, setError] = useState<any>({});
  const handlechange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });

    if (!e.target.value) {
      setError({
        ...error,
        [e.target.name]: `${e.target.name} cannot be blank`,
      });
    } else {
      setError({ ...error, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: any) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    e.preventDefault();

    if (!userInfo.username) {
      setError({ ...error, username: "username cannot be blank" });
    } else if (!userInfo.email) {
      setError({ ...error, email: "email cannot be blank" });
    } else if (!userInfo.email.match(regEx)) {
      setError({ ...error, email: "Invalid email address " });
    } else if (!userInfo.password) {
      setError({ ...error, password: "Password cannot be blank " });
    } else if (userInfo.password.length < 8) {
      setError({ ...error, password: "password must be 8 charecters " });
    } else if (!userInfo.confirmpassword) {
      setError({
        ...error,
        confirmpassword: "confirm password cannot be blank",
      });
    } else if (userInfo.password != userInfo.confirmpassword) {
      setError({ ...error, confirmpassword: "Password must be same" });
    } else {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/login");
    }
  };
  return (
    <div className="container-fluid register-page">
      <div className="row">
        <h2 className="text-center">Register Form</h2>
        <div className="col-lg-6 mt-3">
          <img src={signup} className="img-fluid img-thumbnail rounded" />
        </div>
        <div className="col-lg-5  mt-3">
          <form>
            <div className="form-group mt-4">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                onChange={(e) => handlechange(e)}
                className="form-control mt-1 col-lg-4"
                data-testid="username"
              />
              <span style={{ color: "red" }}>{error.username}</span>
            </div>
            <div className="form-group mt-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => handlechange(e)}
                className="form-control mt-1"
                data-testid="email"
              />
              <span style={{ color: "red" }}>{error.email}</span>
            </div>
            <div className="form-group mt-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => handlechange(e)}
                className="form-control mt-1"
                data-testid="password"
              />
              <span style={{ color: "red" }}>{error.password}</span>
            </div>
            <div className="form-group mt-4">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Enter your confirm password"
                onChange={(e) => handlechange(e)}
                className="form-control mt-1"
                data-testid="confirmpassword"
              />
              <span style={{ color: "red" }}>{error.confirmpassword}</span>
            </div>
            <div className="d-grid gap-2">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-dark mt-4"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

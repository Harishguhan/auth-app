import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import login_img from "../../assets/login.avif";
import "../Signup/signup.css";
const Login = (props: any) => {
  const [values, setValues] = useState<any>({});
  const [sign, setSign] = useState<any>({});
  const [error, setError] = useState<any>({});
  const [Invalid, setInvalid] = useState("");
  const navigate = useNavigate();
  const getuser = localStorage.getItem("userInfo");

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });

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
    e.preventDefault();
    if (!values.email) {
      setError({ ...error, email: "email cannot be blank" });
    } else if (!values.password) {
      setError({ ...error, password: "password cannot be blank" });
    } else {
      if (getuser && getuser.length) {
        const userDetails = JSON.parse(getuser);
        if (
          userDetails.email === values.email &&
          userDetails.password === values.password
        ) {
          navigate("/dashboard");
        } else {
          setInvalid("Invalid Email and Password");
        }
      }
    }
  };

  return (
    <div className="container-fluid register-page">
      <div className="row">
        <h1 className="text-center mb-5">Login Form</h1>
        <div className="col-lg-6">
          <img src={login_img} className="img-fluid img-thumbnail rounded" />
        </div>
        <div className="col-lg-6 mt-5">
          <h2 className="text-bold text-center">Log in to</h2>
          <p className="text-log text-center mt-4">
            Login With a registered account
          </p>
          <form onSubmit={handleSubmit}>
            <p style={{ color: "red", textAlign: "center" }}>{Invalid}</p>
            <div className="form-group mt-4">
              <label>Username</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control mt-1"
                onChange={(e) => handleChange(e)}
                data-testid="email"
              />
              <span style={{ color: "red" }}>{error.email}</span>
            </div>
            <div className="form-group mt-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="form-control mt-1"
                onChange={(e) => handleChange(e)}
                data-testid="password"
              />
              <span style={{ color: "red" }}>{error.password}</span>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-dark mt-4">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
const Dashboard = () => {
  const [values, setValues] = useState<any>({});

  const navigate = useNavigate();

  useEffect(() => {
    const userData: any = localStorage.getItem("userInfo");

    const userDetails = JSON.parse(userData);

    setValues(userDetails);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="container d-flex justify-content-center min-vh-100 align-items-center">
      <div className="card" style={{ width: "28rem" }}>
        <img
          src={user}
          className="card-img-top"
          alt="..."
          height={"400px"}
          width={"20rem"}
        />
        <div className="card-body">
          <h5 className="text-center">Welcome {values.username}</h5>
        </div>
        <p className="mx-4">Email ID : {values.email}</p>
        <div className="d-grid gap-2">
          <button onClick={logout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

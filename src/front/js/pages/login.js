import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
/* import "../../styles/home.css"; */

export const Login = () => {
  const history = useHistory();
  const { actions } = useContext(Context);
  const [user, setUser] = useState({});

  const myStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    height: "100vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const loginUser = async () => {
    try {
      const resp = await fetch(
        "https://3001-georgelion-jwtauthentic-s5y82hkrjck.ws-eu53.gitpod.io/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await resp.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        actions.verify();
        history.push("/");
      } else {
        alert("ERROR");
      }
    } catch (e) {
      alert("ERROR");
    }
  };
  return (
    <div className="bg" style={myStyle}>
      <br></br>
      <div
        className="text-center mx-auto"
        style={{
          width: "500px",
          height: "300px",
          marginTop: "170px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1 className="mb-5 pt-4 text-light">LOGIN</h1>
        <div className="row mx-auto w-75">
          <label htmlFor="email" className="text-light">
            Email
          </label>
          <input
            id="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          ></input>
          <label htmlFor="password" className="text-light">
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          ></input>
        </div>
        <button
          className="btn btn-light mt-3 pb-1"
          onClick={() => {
            loginUser();
          }}
        >
          {" "}
          Login
        </button>
      </div>
    </div>
  );
};

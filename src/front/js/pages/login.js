import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import { useHistory } from "react-router-dom";
/* import "../../styles/home.css"; */

export const Login = () => {
    const history = useHistory();
    const { actions } = useContext(Context);
    const [user, setUser] = useState({});

    const myStyle = {
        backgroundImage:
            "url('https://www.cronista.com/files/image/293/293977/5ffe0796e40c8.jpg')",
        height: '100vh',
        marginTop: '-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const loginUser = async () => {
        try {
            const resp = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu44.gitpod.io/api/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                })
            const data = await resp.json();
            if (data.token) {
                localStorage.setItem("token", data.token);
                actions.verify();
                history.push("/");
            } else {
                alert('ERROR')
            }
        } catch (e) {
            alert('ERROR')
        }
    };
    return (
        <div className="bg" style={myStyle}>
            <br></br>
            <div className="text-center mx-auto" style={{ "width": "500px", "height": "300px", "marginTop": '170px', "backgroundColor": "rgba(0, 0, 0, 0.8)" }}>
                <h1 className="mb-5 pt-4 text-light">LOGIN</h1>
                <div className="row mx-auto w-75" >
                    <label htmlFor="email" className="text-light" >Email</label>
                    <input
                        id="email"
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                    ></input>
                    <label htmlFor="password" className="text-light" >Password</label>
                    <input
                        id="password" type="password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    ></input>
                </div>
                <button
                    className="btn btn-light mt-3 pb-1"
                    onClick={() => {
                        loginUser();
                    }}> Login
                </button>
            </div >
        </div>
    );

}
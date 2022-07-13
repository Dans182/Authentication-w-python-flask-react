import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
    const history = useHistory();
    const [user, setUser] = useState({});

    const myStyle = {
        backgroundImage:
            "url('https://redlotusletter.com/wp-content/uploads/2019/03/travel-feng-shui.jpeg')",
        height: '100vh',
        marginTop: '-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const registerUser = async () => {
        try {
            const resp = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu44.gitpod.io/api/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                })
            const data = await resp.json()
            if (data.created) {
                history.push("/login")
            } else {
                alert('ERROR')
            }
        } catch (e) {
            alert('ERROR')
        }
    }
    return (
        <div className="bg" style={myStyle}>
            <br></br>
            <div className="text-center mx-auto" style={{ "width": "500px", "height": "300px", "marginTop": '170px', "backgroundColor": "rgba(0, 0, 0, 0.8)" }}>
                <h1 className="mb-5 pt-4 text-light">REGISTER</h1>
                <div className="row mx-auto w-75">
                    <label htmlFor="email" className="text-light">Email</label>
                    <input
                        id="email"
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                    ></input>
                    <label htmlFor="password" className="text-light">Password</label>
                    <input
                        id="password" type="password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    ></input>
                </div >
                <button
                    className="btn btn-light mt-3"
                    onClick={() => {
                        registerUser();
                    }}> Sign Up
                </button>
            </div >
        </div >
    );
};
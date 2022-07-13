import React, { useContext } from "react";
import { Context } from "../store/appContext";
/* import "../../styles/home.css"; */

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://s1.1zoom.me/big3/655/356483-terminator22.jpg" className="d-block w-100" alt="travel" />
                </div>
                <div className="carousel-item">
                    <img src="https://s1.1zoom.me/b4957/156/Rome_Italy_Ruins_Arch_Septimius_Severus_Temple_532568_1920x1080.jpg" className="d-block w-100" alt="Roma" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.wallpapertip.com/wmimgs/8-87339_541446-title-man-made-santorini-towns-greece-sea.jpg" className="d-block w-100" alt="
Grecia" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
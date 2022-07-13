import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

import "../../styles/index.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark">
			{store.logged != null ? <div className="container">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<span className="navbar-brand mb-0 h1 text-light">HOME</span>
				</Link>
				{store.logged == true ? <Link to="/private" className="m-3">
					<button className="btn btn-light">Private</button>
				</Link> : null}
				{store.logged == true ? <div>
					<Link to="/login">
						<button className="btn btn-light" onClick={() => actions.logout()}>Logout</button>
					</Link>
				</div> : <div>
					<Link to="/login" className="me-3">
						<button className="btn btn-light">Login</button>
					</Link>
					<Link to="/register">
						<button className="btn btn-light">Register</button>
					</Link>
				</div>}
			</div> : null}
		</nav>
	);
};

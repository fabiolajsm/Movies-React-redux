import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm  navbar-light bg-light">
            <Link to="/" className="navbar-brand">mOvIe LiSt</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="watch">Watch</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="watched">Watched</Link>
                    </li>
                </ul>
                <Search />
            </div>
        </nav>
    );
};

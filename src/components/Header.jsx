import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/crown.svg";
import "./Header.scss";


function Header() {
    return (
        <div className="Header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    shop
                </Link>
                <Link className="option" to="/shop">
                    contact
                </Link>
                <Link className="option" to="/signin">
                    sign in
                </Link>
            </div>
        </div>
    )
}

export default Header

import React from 'react';
import {Link} from "react-router-dom";
import { auth } from "../firebase/utils"
import {connect} from 'react-redux';
import {ReactComponent as Logo} from "../assets/crown.svg";
import "./Header.scss";


function Header({currentUser}) {
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
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>sign out</div>
                    :
                    <Link className="option" to="/signin">sign in</Link>
                }
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Header)

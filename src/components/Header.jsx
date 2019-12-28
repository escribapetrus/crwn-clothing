import React from 'react';
import {Link} from "react-router-dom";
import { auth } from "../firebase/utils";
import CartIcon from "./Cart-Icon";
import CartDropdown from "./Cart-Dropdown";
import {selectCurrentUser} from "../redux/userSelector"
import {selectCartShow} from "../redux/cartSelector"
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux';
import {ReactComponent as Logo} from "../assets/crown.svg";
import "./Header.scss";


function Header({currentUser, show}) {
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
                <CartIcon/>
            </div>
            {show && <CartDropdown/>}
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    show:selectCartShow
})

export default connect(mapStatetoProps)(Header)

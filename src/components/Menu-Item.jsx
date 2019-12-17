import React from "react";
import {withRouter} from "react-router-dom";
import "./Menu-Item.scss";

function MenuItem({imageUrl, title, size, linkUrl, history, match}){
    return (
        <div 
        className={`${size} Menu-Item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
            className="background-image"
            style={{backgroundImage:`url(${imageUrl}`}}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
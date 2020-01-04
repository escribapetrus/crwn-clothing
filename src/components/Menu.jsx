import React from "react"
import MenuItem from "./Menu-Item";
// import sections from "../resources/sections"
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectMenuSections} from '../redux/menuSelector'
import "./Menu.scss"

function Menu({sections}) {
    return(
        <div className="Menu">
            {sections.map(({id, ...sectionProps}) => (
                <MenuItem key={id} {...sectionProps}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectMenuSections
})
export default connect(mapStateToProps)(Menu) 
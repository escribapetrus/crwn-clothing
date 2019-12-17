import React from "react"
import MenuItem from "./Menu-Item";
import sections from "../resources/sections"
import "./Menu.scss"

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sections: sections
        }
    }
    render(){
        return(
            <div className="Menu">
                {this.state.sections.map(({id, ...sectionProps}) => (
                    <MenuItem key={id} {...sectionProps}/>
                ))}
            </div>
        )
    }
}

export default Menu
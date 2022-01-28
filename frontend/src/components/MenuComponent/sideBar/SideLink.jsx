import React from 'react';
import "./sidelink.scss"

const SideLink = ({name}) => {

    return (
        <li className={"list"}>
            <a href={"#"} className={"links"}>

                <span>{name}</span>
            </a>
        </li>
    );
};

export default SideLink;

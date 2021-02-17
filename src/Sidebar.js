import React from 'react';
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from "./SidebarOption"
import StarIcon from "@material-ui/icons/Star"

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose" >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={10} />
        </div>
    )
}

export default Sidebar

import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar src="./1614260539211300x300.jpg"/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
     <div className="sidebar__searchContainer">
<SearchOutlinedIcon/>
<input type='text' placeholder="Search or Start New"/>
     </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>

      </div>
    </div>
  );
}

export default sidebar;

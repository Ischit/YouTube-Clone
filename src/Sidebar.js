import "./Sidebar.css";
import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ExpandMoreOutlined,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAlt,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title={"Home"} />
      <SidebarRow Icon={Whatshot} title={"Trending"} />
      <SidebarRow Icon={Subscriptions} title={"Subscription"} />
      <hr />
      <SidebarRow Icon={VideoLibrary} title={"Library"} />
      <SidebarRow Icon={History} title={"History"} />
      <SidebarRow Icon={OndemandVideo} title={"Your videos"} />
      <SidebarRow Icon={WatchLater} title={"Watch Later"} />
      <SidebarRow Icon={ThumbUpAlt} title={"Liked Videos"} />
      <SidebarRow Icon={ExpandMoreOutlined} title={"Show more"} />
      <hr />
    </div>
  );
}

export default Sidebar;

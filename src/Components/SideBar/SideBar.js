import React from "react";
import Menu from "../Menu/Menu.js";
import SideBarList from "../SideBarList/SideBarList.js";
import "./sidebar.css";
// DO NOT TOUCH THIS
import { sidebarRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
// ------------------------

function SideBar() {
	//TOUCH THAT IF YOU WOKE UP BRAVE TODAY
	useRenderMeter(sidebarRenderMeterState);
	// ---------------------------------------------
	return (
		<div className="sidebar">
			<Menu />
			<SideBarList />
		</div>
	);
}

export default SideBar;

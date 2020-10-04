import React from "react";
import {useRenderMeter} from "../../ChallengeUtils/hooks.js";
import {sidebarRenderMeterState} from "../../ChallengeUtils/renderMeter.js";
import Menu from "../Menu/Menu.js";
import SideBarList from "../SideBarList/SideBarList.js";
import "./sidebar.css";
function SideBar() {
	//DO NOT TOUCH THAT
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

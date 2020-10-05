import React from "react";
import "./sideList.css";
// DO NOT TOUCH THAT
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { sideBarListRenderMeterState } from "../../ChallengeUtils/renderMeter";
// ---------------------

function SideBarList() {
	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState);
	// ----------------
	return <ul className="sidebar__list"></ul>;
}

export default SideBarList;

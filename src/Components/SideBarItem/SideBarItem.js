import React from "react";
import "./sideBarItem.css";

function SideBarItem() {
	return (
		<li className="sidebar__row">
			<span className="sidebarItemName"></span>
			<label>width :</label>
			<input id="shapeWidthInput" type="number" placeholder="width" min="0" />
			<label>height :</label>
			<input id="shapeHeightInput" type="number" placeholder="height" min="0" />
			<label>color :</label>
			<input type="color" id="colorModifier" />
		</li>
	);
}

export default SideBarItem;

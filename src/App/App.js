import React from "react";
import Canvas from "../Components/Canvas/Canvas.js";
import SideBar from "../Components/SideBar/SideBar.js";
import ColorPicker from "../Components/ColorPicker/ColorPicker.js";
import "./app.css";
// DO NOT TOUCH THIS
import { appRenderMeterState } from "../ChallengeUtils/renderMeter";
import { useRenderMeter } from "../ChallengeUtils/hooks.js";
// --------------------------
function App(props) {
	//DO NOT TOUCH THAT
	useRenderMeter(appRenderMeterState);
	// ---------------------------------------------
	return (
		<div className="app">
			<header className="app__header">
				<h1>Recoil challenge</h1>
			</header>
			<SideBar />
			<Canvas />
			<ColorPicker />
		</div>
	);
}

export default App;

import React from "react";
import "./canvas.css";
// DO NOT TOUCH THAT
import { canvasRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";

function Canvas() {
	// TOUCH THAT IF YOU WANT TO GET KILLED
	useRenderMeter(canvasRenderMeterState);
	// ---------------------------------------------

	return (
		<div
			className="canvas"
			id="canvas"
			style={{ backgroundColor: "white" }}></div>
	);
}

export default Canvas;

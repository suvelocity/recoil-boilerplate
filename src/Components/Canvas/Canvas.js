import React from "react";
import { canvasBackgroundColorState } from "../../Atoms/canvasBackgroundColorState.js";
import { rectsIdsArrState } from "../../Atoms/rectsIdsArrState.js";
import { useRecoilValue} from "recoil";
import Rectangle from "../Rectangle/Rectangle.js";
import "./canvas.css";
import {canvasRenderMeterState} from "../../ChallengeUtils/renderMeter.js";
import {useRenderMeter} from "../../ChallengeUtils/hooks.js";

function Canvas() {
	//DO NOT TOUCH THAT
	useRenderMeter(canvasRenderMeterState);
	// ---------------------------------------------
	const backgroundColor = useRecoilValue(canvasBackgroundColorState);
	const rectsIdsArr = useRecoilValue(rectsIdsArrState);

	return (
		<div className="canvas" id="canvas" style={{ backgroundColor: backgroundColor }}>
			{rectsIdsArr.map(id => (
				<Rectangle key={id} rectId={id} />
			))}
		</div>
	);
}

export default Canvas;

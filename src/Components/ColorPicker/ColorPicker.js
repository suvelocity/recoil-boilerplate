import React from "react";
import { canvasBackgroundColorState } from "../../Atoms/canvasBackgroundColorState.js";
import { useSetRecoilState } from "recoil";
import "./colorPicker.css";





function ColorPicker() {
	const setBackgroundColor = useSetRecoilState(
		canvasBackgroundColorState
	);


	return (
		<div className="colorPicker">
			<label htmlFor="colorPickerInput">
				change canvas color to random color:
				<button
				id="changeColor"
				onClick={()=>setBackgroundColor(random_rgba())}
				>
					Random background color
				</button>

			</label>
		</div>
	);
}

export default ColorPicker;

function random_rgba() {
	const o = Math.round;
	const r = Math.random;
	const s = 255;
	return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
import React from "react";
import "./colorPicker.css";

function ColorPicker() {
	return (
		<div className="colorPicker">
			<label htmlFor="colorPickerInput">
				change canvas color to random color:
				<input id="colorPickerInput" type="color" />
			</label>
		</div>
	);
}

export default ColorPicker;

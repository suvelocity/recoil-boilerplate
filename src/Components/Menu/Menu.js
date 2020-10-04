import React, { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { rectsIdsArrState } from "../../Atoms/rectsIdsArrState.js";
import { rectAtomFamily } from "../../Atoms/rectAtom.js";
import "./menu.css";

function Menu() {
	// Input states
	const [widthInput, setWidthInput] = useState(75);
	const [heightInput, setHeightInput] = useState(75);
	const [colorInput, setColorInput] = useState("#769fcd");
	// Counter to Generate unique rect Id's
	const [idCounter, setIdCounter] = useState(1);
	const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(idCounter));
	const [shapesIdsArr, setShapesIdsArr] = useRecoilState(rectsIdsArrState);
	const resetList = useResetRecoilState(rectsIdsArrState);

	const submitShape = () => {
		setShapesIdsArr([...shapesIdsArr, idCounter]);
		setRectAtom({
			...rectAtom,
			width: parseInt(widthInput),
			height: parseInt(heightInput),
			color: colorInput
		});
		setWidthInput(75);
		setHeightInput(75);
		setIdCounter(idCounter + 1);
	};
	const deleteAllRectangles = () => {
		resetList();
		setIdCounter(1);
	};

	return (
		<div className="sidebar__menu">
			<label htmlFor="widthInput">Width:</label>
			<input
				id="widthInput"
				type="number"
				placeholder="50"
				value={widthInput}
				onChange={({ target }) => setWidthInput(target.value)}
				min="0"
			/>
			<label htmlFor="heightInput">Height:</label>
			<input
				id="heightInput"
				type="number"
				placeholder="50"
				value={heightInput}
				onChange={({ target }) => setHeightInput(target.value)}
				min="0"
			/>
			<label htmlFor="colorPicker">Color:</label>
			<input
				type="color"
				id="colorPicker"
				value={colorInput}
				onChange={({ target }) => setColorInput(target.value)}
			/>
			<button onClick={submitShape}>Add Shape</button>
			<button onClick={deleteAllRectangles} id="reset">
				Reset List
			</button>
		</div>
	);
}
export default Menu;

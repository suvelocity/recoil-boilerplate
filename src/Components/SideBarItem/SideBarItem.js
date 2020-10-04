import React from "react";
import { useRecoilState } from "recoil";
import { rectAtomFamily } from "../../Atoms/rectAtom.js";
import "./sideBarItem.css";

function SideBarItem({ rectId }) {
	const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(rectId));

	const handleWidthChange = ({ target: { value } }) => {
		setRectAtom({ ...rectAtom, width: parseInt(value) });
	};
	const handleHeigthChange = ({ target: { value } }) => {
		setRectAtom({ ...rectAtom, height: parseInt(value) });
	};
	const handleColorChange = ({ target: { value } }) => {
		setRectAtom({ ...rectAtom, color: value });
	};

	return (
		<li className="sidebar__row">
			<span>{rectAtom.name}</span>
			<label>
				width :
			</label>
			<input
				id="shapeWidthInput"
				type="number"
				placeholder="width"
				min="0"
				value={rectAtom.width}
				onChange={handleWidthChange}
			/>
			<label>
				height :
			</label>
			<input
				id="shapeHeightInput"
				type="number"
				placeholder="height"
				min="0"
				value={rectAtom.height}
				onChange={handleHeigthChange}
			/>
			<label>
				color :
			</label>
			<input
				type="color"
				id="colorModifier"
				value={rectAtom.color}
				onChange={handleColorChange}
			/>
		</li>
	);
}

export default SideBarItem;

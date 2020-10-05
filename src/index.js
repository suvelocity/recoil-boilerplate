import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import DisplayRenders from "./Components/DisplayRender/DisplayRenders";
import { RecoilRoot } from "recoil";

ReactDOM.render(
	<RecoilRoot>
		<DisplayRenders />
		<App />
	</RecoilRoot>,
	document.getElementById("root")
);

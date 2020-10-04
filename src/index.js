import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {RecoilRoot} from 'recoil';
import DisplayRenders from './Components/DisplayRender/DisplayRenders';
ReactDOM.render(
    <RecoilRoot>
      <DisplayRenders/>
      <App />
    </RecoilRoot>,
  document.getElementById('root')
);

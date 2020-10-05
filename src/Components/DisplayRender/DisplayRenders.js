import React from 'react'
import {useRecoilValue} from 'recoil';
import {renderMeterStats} from '../../ChallengeUtils/renderMeter';
import './DisplayRenders.css'
function DisplayRenders() {
  const { appRenders, canvasRenders , sideBarRenders , SideBarListRenders} = useRecoilValue(renderMeterStats)
  return (
      <div className="displayRenders">
        <h5>Renders</h5>
        <div className="displayRenders__table">
          <span>App:{" "}</span>
          <span id="app-render">{appRenders}</span>
          <span>Canvas:{" "}</span>
          <span id="canvas-render"> {canvasRenders}</span>
          <span>SideBar:{" "}</span>
          <span id="sideBar-render">{sideBarRenders}</span>
          <span>SideBarList:{" "}</span>
          <span id="sideBarList-render">{SideBarListRenders}</span>
        </div>
      </div>
  )
}

export default DisplayRenders

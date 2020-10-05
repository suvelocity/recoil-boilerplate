import { atom ,selector }  from 'recoil';

export const appRenderMeterState = atom ({
  key:'appRenderMeterState',
  default : 0
})
export const sidebarRenderMeterState = atom ({
  key:'sideBarRenderMeterState',
  default : 0
})
export const canvasRenderMeterState = atom ({
  key:'canvasRenderMeterState',
  default : 0
})
export const sideBarListRenderMeterState = atom ({
  key: 'sideBarListRenderMeterState',
  default: 0
})

export const renderMeterStats = selector({
  key: 'renderMeterStats',
  get : ({get}) => {
    const appRenders = get(appRenderMeterState);
    const sideBarRenders = get(sidebarRenderMeterState);
    const canvasRenders = get(canvasRenderMeterState);
    const SideBarListRenders = get(sideBarListRenderMeterState);
    return  {
      appRenders,
      sideBarRenders,
      canvasRenders,
      SideBarListRenders
    }
  }
})
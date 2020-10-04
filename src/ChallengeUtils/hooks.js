import {useEffect} from "react";
import {useSetRecoilState} from "recoil";

export const useRenderMeter = (atomMeter) => {
  const addRender = useSetRecoilState(atomMeter);
  useEffect(() => {
    addRender(prev => prev + 1 );
  }
  )
}

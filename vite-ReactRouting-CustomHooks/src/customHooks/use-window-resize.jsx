import { useLayoutEffect, useState } from "react"

export const UseWindowResize = () => {

    const [windowSize, setWindowSize] = useState({
        width : 0,
        height : 0
    });

    const handleResize = () => {
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight
        });
    };
    
    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
    },[]);

  return (
    <div>UseWindowResize</div>
  )
}

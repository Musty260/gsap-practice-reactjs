import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);

    const fade = useSpring({
        // opacity: isToggled ? 1 : 0,
        color: isToggled ? "red" : "green",
        // fontSize: isToggled ? "2rem" : "4rem",
        transform: isToggled ? "translate3d(0,0,0)" : "translate3d(0, -50px, 0)"
    })

    return(
        <div style={{ alignContent:"" }}>
            <animated.h1 style={Object.assign({ color:"white" }, fade)}>Hello</animated.h1>
            <button onClick={() => {setToggle(!isToggled)}}>Toggle</button>
        </div>
    )
}

export default Toggle
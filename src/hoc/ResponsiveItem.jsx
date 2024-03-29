import React, { useEffect, useState } from "react";

export default function ResponsiveItem(props) {
    const [screen, setScreen] = useState({
        width: window.innerWidth, // lấy giá trị hiện
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleOnResize = () => {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.onresize = handleOnResize;
        return () => {
            window.removeEventListener("resize", handleOnResize);
        };
    }, []);
    if (screen.width <= 1024 && props.componentMobile) {
        // Load component mobile
        return <props.componentMobile />;
    }
    //Ngược lại thì load component thường
    return <props.component />;
}

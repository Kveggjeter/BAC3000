/*
import {useEffect, useState} from "react";

const [pointerStyle, setPointerStyle] = useState({
    left: "50%",
    top: "50%",
    opacity: 1,
});

useEffect(() => {
    const interval = setInterval(() => {
        const randomLeft = Math.floor(Math.random() * 99) + 1;
        const randomTop = Math.floor(Math.random() * 99) + 1;
        setTimeout(() => {
            setPointerStyle({
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                opacity: 1,
            });
        }, 3000);
    }, 10000);

    return () => clearInterval(interval);
}, []);
*/

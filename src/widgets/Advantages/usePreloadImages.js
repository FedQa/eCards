import {useEffect} from "react";


export const usePreloadImages = (images) => {
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        })
    }, [images]);
}
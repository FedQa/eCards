import './Advantages.css'
import {useEffect, useState} from "react";
import Iphone from "../../shared/components/Iphone/Iphone";
import {advantagesData} from "../../shared/constants/advantages.data";
import {usePreloadImages} from "./usePreloadImages";

function Advantages() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [timerKey, setTimerKey] = useState(0);

    const images = advantagesData.map((adv) => adv.img);
    usePreloadImages(images);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % advantagesData.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [timerKey])

    const handleElementClick = (index) => {
        setSelectedIndex(index);
        setTimerKey(prevKey => prevKey + 1);
    }

    return (
        <section className="adv">
            <div className="advan__wrapper">

                <div className="adv__left">
                    <div className="iphone-container">
                        <Iphone
                            className={"iphone__frame"}
                            href={advantagesData[selectedIndex].img}
                            key={advantagesData[selectedIndex].id}
                        />
                    </div>
                </div>

                <div className="adv__right">
                    <div className="adv__title">
                        С eCards ты можешь:
                    </div>
                    <div className="adv__list">
                        {advantagesData.map((value, index) => (
                            <div
                                className={`adv__element ${index === selectedIndex ? "adv__element-selected" : ""}`}
                                onClick={() => handleElementClick(index)}
                                key={value.id}
                                indexBefore={index + 1}
                            >
                                {value.label}
                                {index === selectedIndex && <div className="progress-bar"></div>}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Advantages;
import './Advantages.css'
import {useEffect, useState} from "react";
import iphone from '../../shared/assets/iphone.svg'

import Iphone from "../../shared/components/Iphone/Iphone";
import {advantagesData} from "../../shared/constants/advantages.data";

function Advantages() {
    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleElementClick = (index) => {
        console.log("select item");
        setSelectedIndex(index);
    }

    return (
        <section className="adv">
            <div className="advan__wrapper">

                <div className="adv__left">
                    <div className="iphone-container">
                        <Iphone className={"iphone__frame"} href={advantagesData[selectedIndex].img} />
                    </div>
                </div>

                <div className="adv__right">
                    <div className="adv__title">
                        Возможности нашего приложения
                    </div>
                    <div className="adv__list">
                        {advantagesData.map((value, index) => (
                            <div className={`adv__element ${index===selectedIndex ? "adv__element-selected" : ""}`} onClick={() => handleElementClick(index)} key={value.id} indexBefore={index+1}>
                                {value.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;
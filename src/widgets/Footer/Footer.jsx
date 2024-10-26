import map from './../../shared/assets/map-svgrepo-com.svg'
import think from './../../shared/assets/think-creative-thinking-svgrepo-com.svg'
import storage from './../../shared/assets/storage-svgrepo-com.svg'
import footerImg from './../../shared/assets/footer_img.png'
import Logo from "../../shared/components/Logo/Logo";
import './Footer.css'
import DownloadButton from "../../shared/components/DownloadButton/DownloadButton";
import React from "react";
import Rating from "../../shared/components/Rating/Rating";
import FooterItem from "./FooterItem";


function Footer() {
    return (
        <section className="footer">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <div className="footer__title">
                        <Logo text="Больше, чем просто приложение" weight={600} size={40}/>
                    </div>

                    <div className="footer__list">
                        <FooterItem imgSrc={map} text="Конструктор собственных карт для запоминания" />
                        <FooterItem imgSrc={storage} text="База из более чем из 5000 слов" />
                        <FooterItem imgSrc={think} text="7 научных методологий запоминания" />
                    </div>
                </div>

                <div className="footer__right">
                    <div className="footer__right__img">
                        <img src={footerImg} />
                    </div>

                    <div className="footer__right__wrapper">
                        <div className="footer__rating">
                            <Rating />
                        </div>


                        <div className="footer__buttons">
                            <DownloadButton type="google" isDefault={false} />
                            <DownloadButton type="appStore" isDefault={false} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;
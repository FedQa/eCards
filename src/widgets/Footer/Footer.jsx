import map from './../../shared/assets/map-svgrepo-com.svg'
import think from './../../shared/assets/think-creative-thinking-svgrepo-com.svg'
import storage from './../../shared/assets/storage-svgrepo-com.svg'
import footerImg from './../../shared/assets/footerImg.svg'
import Logo from "../../shared/components/Logo/Logo";
import './Footer.css'
import DownloadButton from "../../shared/components/DownloadButton/DownloadButton";
import React from "react";
import FooterItem from "./FooterItem";


function Footer() {
    return (
        <section className="footer">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <div className="footer__title">
                        <Logo text={`Больше`} weight={600} className="footer__logo_first" />
                        <Logo text={`чем просто приложение`} weight={600} className="footer__logo_second" />
                    </div>

                    <div className="footer__list">
                        <FooterItem imgSrc={map} text="Конструктор собственных карт для запоминания"/>
                        <FooterItem imgSrc={storage} text="База более чем из 5000 слов"/>
                        <FooterItem imgSrc={think} text="7 научных методологий запоминания"/>
                    </div>
                </div>

                <div className="footer__right">
                    <img src={footerImg} alt="footer image card"/>

                    <div className="footer__buttons">
                        <DownloadButton type="google" isDefault={true}/>
                        <DownloadButton type="appStore" isDefault={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
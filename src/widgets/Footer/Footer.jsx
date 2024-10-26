import world from './../../shared/assets/world.svg'
import check from './../../shared/assets/check.svg'
import friends from './../../shared/assets/Friends.svg'
import footerImg from './../../shared/assets/footer_img.png'
import Logo from "../../shared/components/Logo/Logo";
import './Footer.css'
import DownloadButton from "../../shared/components/DownloadButton/DownloadButton";
import React from "react";
import Rating from "../../shared/components/Rating/Rating";


function Footer() {
    return (
        <section className="footer">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <div className="footer__title">
                        <Logo text="Мы предлагаем" />
                    </div>

                    <div className="footer__list">
                        <div className="footer__element">
                            <div className="footer__img">
                            <img src={world} />
                            </div>
                            <p className="footer__text">
                                Гарантированное улучшение словарного запаса за 30 дней
                            </p>
                        </div>
                        <div className="footer__element">
                            <div className="footer__img">
                            <img src={friends} />
                            </div>
                            <p className="footer__text">
                                Учите язык с друзьями
                            </p>
                        </div>
                        <div className="footer__element">
                            <div className="footer__img">
                            <img src={check} />
                            </div>
                            <p className="footer__text">
                                Персонализированные уроки на основе вашего уровня и целей
                            </p>
                        </div>
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
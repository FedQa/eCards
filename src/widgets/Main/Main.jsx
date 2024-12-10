import main_phone from '../../shared/assets/main_phone.svg'
import gradient from '../../shared/assets/gradient.svg'
import star from '../../shared/assets/star.svg'
import Logo from "../../shared/components/Logo/Logo";
import DownloadButton from "../../shared/components/DownloadButton/DownloadButton";
import Counter from "../../shared/components/Counter/Counter";
import './Main.css';


function Main() {
    return (<section className="main">
        <div className="main__wrapper">
            <header className="header">
                <div className="header__title">
                    <Logo text="eCards" color={"#FEBE10"}/>
                </div>

            </header>

            <div className="content">
                <div className="left">
                    <div className="left__content">
                        <div className="content__title">
                            <h2>Учи английский с AI и запоминай новые слова легко</h2>
                        </div>
                        <div className="content__text">
                            <p id="text__1">Мы создали интеллектуальный тренажер на основе научных работ по запоминанию</p>
                            <p id="text__2">Искусственный интеллект подберет слова на все случаи жизни и поможет их запомнить</p>
                        </div>
                    </div>
                    <div className="downloadButtons">
                        <DownloadButton type={"google"} isDefault className="downloadButton"/>
                        <DownloadButton type={"appStore"} isDefault className="downloadButton"/>
                    </div>
                    <div className="wrapper__counter">
                        <Counter text="1" label="слов сгенерировано"/>
                    </div>
                </div>

                <div className="right">
                    <div className="img">
                        <div className="img__wrapper">
                            <img className="main_image" src={main_phone}/>
                            <img className="gradient" src={gradient}/>
                            <div className="star" id="star__top">
                                <img src={star} height={65}/>
                            </div>

                            <div className="star" id="star__center">
                                <img src={star} height={40}/>
                            </div>

                            <div className="star" id="star__bottom">
                                <img src={star} height={55}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Main;
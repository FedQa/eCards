import React from 'react';

const FooterItem = ({imgSrc, text}) => {
    return (
        <div className="footer__element">
            <div className="footer__img">
                <img src={imgSrc} alt="" />
            </div>
            <p className="footer__text">{text}</p>
        </div>
    );
};

export default FooterItem;
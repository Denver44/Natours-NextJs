import React from 'react';
// import './footer.module.scss';

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src="img/logo-green-2x.png"
          alt="Full logo"
          className="footer__logo"
        />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by
            <a href="#" className="footer__link footer__link__author-name">
              Denver
            </a>
            for learning purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
// import './footer.module.scss';

export const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="./img/logo-white.png" alt="logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

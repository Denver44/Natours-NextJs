import React from 'react';
import { MainLayoutComponent } from '../../Layout/MainLayout/MainLayoutComponent';
import { HomeScene } from './HomeScene';

export const HomeContainer = () => {
  return (
    <>
      <HomeScene />

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img" />
            <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read the terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae consectetur cumque, eveniet nihil harum numquam
              suscipit tempore asperiores sunt vero ducimus laboriosam totam
              blanditiis exercitationem aperiam corporis. Atque ex animi veniam
              beatae iusto, rem delectus. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quibusdam nemo nostrum aspernatur?
              Libero ratione eligendi aspernatur dignissimos iste eius molestiae
              quas voluptate, corporis adipisci possimus, incidunt deserunt
              dolorum fuga voluptates deleniti dolores necessitatibus! Sit,
              aperiam, ullam explicabo soluta officiis fugiat expedita
              voluptates quas velit maiores esse dolores voluptatibus quibusdam
              alias! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus possimus itaque quas distinctio cum. Vitae porro
              quidem eveniet beatae atque vel et voluptatibus
            </p>
            <a href="#" className="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

HomeContainer.Layout = MainLayoutComponent;

export default HomeContainer;

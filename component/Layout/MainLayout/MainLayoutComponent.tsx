import React from 'react';
import { FooterComponent } from './Footers/FooterComponent';
import { NavbarComponent } from './Navbars/NavbarComponent';

export const MainLayoutComponent: React.FC<{}> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
};

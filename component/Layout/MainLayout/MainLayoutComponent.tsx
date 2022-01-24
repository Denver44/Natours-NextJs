import React from 'react';
import { FooterComponent } from './Footer/FooterComponent';
import { HeaderComponent } from './Header/HeaderComponent';
import { NavbarComponent } from './Navbar/NavbarComponent';

export const MainLayoutComponent: React.FC<{}> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

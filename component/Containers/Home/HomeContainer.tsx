import React from 'react';
import { MainLayoutComponent } from '../../Layout/MainLayout/MainLayoutComponent';
import { HomeScene } from './HomeScene';

export const HomeContainer = () => {
  return (
    <>
      <HomeScene />
    </>
  );
};

HomeContainer.Layout = MainLayoutComponent;

export default HomeContainer;

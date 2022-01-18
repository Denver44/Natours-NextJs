import { actions } from '@storybook/addon-actions';
import React from 'react';
import AComponent from './AComponent';

export default {
  title: 'A Component',
  component: AComponent,
  argTypes: {
    onClickEvent: { action: 'clicked' },
    children: { control: 'text' },
  },
  args: {
    children: 'A Component',
  },
};

export const Basic = ({ children }) => <AComponent>{children}</AComponent>;

export const WithOnClick = ({ children }) => (
  <AComponent {...actions('onClickEvent')}>{children}</AComponent>
);

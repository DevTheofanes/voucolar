import React from 'react';

import { MainComponent } from './styles';
import Title from '../Title/index.jsx';
import Cart from './Cart/index.jsx';

function Main() {
  return (
    <MainComponent>
      <Title />
      <Cart />
    </MainComponent>
  );
}

export default Main;

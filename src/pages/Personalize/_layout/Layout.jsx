import React from 'react';
import { BiUser, BiCart } from "react-icons/bi";

import Logo from '../../../assets/voucolar.png'
import { NewHeader } from '../../../components/NewHeader';
import { Container, Header, Content, ButtonNext } from './styles'

export const PersonalizeLayout = props => {
  const { buttonContent, to, children } = props;
  return (
    <Container>
      <NewHeader title="Personalize Rápido" border={true}/>

      <Content>
        {children}
        <ButtonNext to={to}>
          <button> {buttonContent}</button>
        </ButtonNext>
      </Content>
    </Container>
  );
}


import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { TitleComponent, TitleInner, FlexCol, Breadcrumbs, LinkRoute } from './styles';

function Title() {
  return (
    <TitleComponent>
      <TitleInner>
        <FlexCol>
          <Breadcrumbs>
            <LinkRoute active>Carrinho de compras</LinkRoute>
            <span>
              <FiChevronRight size={18} color="#ccc"/>
            </span>
            <LinkRoute>Detalhes da compra</LinkRoute>
            <span>
              <FiChevronRight size={18} color="#ccc"/>
            </span>
            <LinkRoute>Pedido completo</LinkRoute>
          </Breadcrumbs>
        </FlexCol>
      </TitleInner>
    </TitleComponent>
  );
}

export default Title;

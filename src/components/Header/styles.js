import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  max-height: 6.5625rem;
  padding: 0 8.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width:1480px){
    padding: 0 6rem;
  }

  @media (max-width:1380px){
    padding: 0 4.3525rem;
  }

  @media (max-width:1280px){
    padding: 0 3.65rem;
  }

  @media (max-width:1080px){
    padding: 0 2rem;
  }

  @media (max-width:880px){
    padding: 0 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 72%;
  margin-left: 0.5rem;

  a{
    color: #666;
    letter-spacing: 0.0375rem;
    font-weight: 300;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
`;

export const Infos = styled.div`
  min-width: 30%;

  a+a{
    margin-left: 0.5rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonEntry = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem 0.75rem;

  border: 0;
  border-radius: 0;
  border-right: 1px solid #c2c2c2;
  background-color: transparent;

  span{
    color: #777;
    font-weight: 400;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
`;

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  
  margin-left: 0.5rem;
  padding: 0.5rem 0.75rem;

  border: 1px solid #c2c2c2;
  border-radius: 1.8rem;
  background-color: transparent;

  span{
    margin-left: 0.275rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: #c2c2c2;
  }
`;
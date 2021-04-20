import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0 8.75rem;
  display: flex;

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


export const CategoriesBox = styled.div`
  width: 16%;
  margin-top: 1.875rem;
  margin-right: 2rem;

  h1{
    color: #707070;
    text-transform: uppercase;
    font-size: 1.125rem;
  }

  div{
    margin-top: 0.875rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #eee;

    a{
      color: #F29595;
      font-size: 1.125rem;
      margin-top: 0.875rem;
    }
  }
`;

export const Content = styled.div`
  width: 84%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

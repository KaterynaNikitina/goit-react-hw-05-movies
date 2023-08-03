import { styled } from 'styled-components';

export const Container = styled.div`
  /* background-color: #acd7f7; */
  /* color: #0f0c5c;
  margin: o auto;
  min-width: 320px; */
/* 
  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  } */
`;

export const List = styled.ul`
padding: 16px 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 28px;
   
  }
`;


export const Item = styled.li`
  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 16px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 48px) / 4);

    &:hover img {
      transform: scale(1.03);
    }
  }
`;
export const Image = styled.img`
  margin-bottom: 12px;
  width: 100%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    height: 540px;

    object-fit: cover;
  }

  @media screen and (min-width: 1280px) {
    height: 460px;
  }
`;

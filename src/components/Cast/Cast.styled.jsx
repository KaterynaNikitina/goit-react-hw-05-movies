import { styled } from "styled-components";

export const CastList = styled.ul`
display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 16px;
  border-top: 2px solid #0f0c5c;
  padding-top: 20px;
  padding-left: 8px;
  padding-right: 8px;
  
  @media screen and (min-width: 767px) {
    column-gap: 16px;
  row-gap: 28px;
  }
`;
export const Item = styled.li`

  flex-basis: calc((100% - 16px) / 2);
  
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 3);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 64px) / 5);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 204px;
  margin-bottom: 12px;

  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 350px;
  }
  @media screen and (min-width: 1280px) {
    height: 355px;
  }
`;
export const Title = styled.h4`
  @media screen and (max-width: 767px){
    font-size: 14px;
    margin: 0;
    margin-bottom: 8px;
    color: #0f0c5c;
  }
`

export const Text = styled.p`
    color: #0f0c5c;
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: 14px;

    @media screen and (max-width: 767px){
    font-size: 12px;
    
  }
`;



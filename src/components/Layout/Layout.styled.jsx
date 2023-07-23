import { styled } from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`

    margin: 0 auto;
    min-width: 100%;

    /* @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px){
    width: 768px;
  }

  @media screen and (min-width: 1280px){
    width: 1280px;
  } */
`;

export const NavList = styled.ul`
    background-color: #0f0c5c;
    color: #adc6f8;
    display: flex;
    gap: 16px;
    height: 85px;
    margin: 0 0 30px 0;
`;

export const Link = styled(NavLink)`
    display: block;
    padding: 24px;
    font-size: 32px;
    color: #adc6f8;

    &.active {
    color: #0f0c5c;
    background-color: #adc6f8;
  }
`
import { styled } from "styled-components";

export const MovieCard = styled.div`
    display: flex;
    margin-bottom: 0;
    margin-top: 24px;

`;

export const Image = styled.img`
  @media screen and (min-width: 768px) {
    margin-left: 28px;
  }
`;

export const SubTitle = styled.h2`
  color: #0f0c5c;
  font-size: 24px;
  margin-left: 40px;
  `;

export const Text = styled.p`
margin-bottom: 16px;
font-size: 20px;
margin-left: 40px;
color: #0f0c5c;
`;

// export const List = styled.ul`
//   border-top: 1px solid #a8b3a8;
//   margin-bottom: 16px;
// `;
// export const Item = styled.li`
//   margin-bottom: 8px;
//   &:hover {
//     color: #a8b3a8;
//   }
// `;
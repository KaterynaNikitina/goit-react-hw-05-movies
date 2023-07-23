import { styled } from "styled-components";

// export const Wrapper = styled.div`
//   display: inline-flex;
//   align-items: center;
//   position: relative;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  /* background-color: #fff; */
  border-radius: 3px;
  /* overflow: hidden; */
`

  export const Button = styled.button`
    /* display: inline-block; */
    width: 84px;
    height: 34px;
    color: #0f0c5c ;
    background-color: #adc6f8;
    font-size: 16px;
    cursor: pointer;
  `;

  export const Input = styled.input`
    width: 100%;
    max-width: 314px;
    height: 28px;
    font-size: 16px;
    padding-left: 12px;
    margin-left: 30px;
   
  `;

  
//   .SearchForm_input::placeholder {
//     font: inherit;
//     font-size: 18px;
//   }
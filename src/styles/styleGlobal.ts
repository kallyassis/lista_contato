import styled, { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none
  }

`;
export default StyleGlobal;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height:100vh;
  padding: 30px;
  background-color: #ebe8d2ff;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;

import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    background-color: #8a8a8d51;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
    border: 2px solid #000;
    border-radius: 30px;
  }

  input {
    padding: 10px 0px;
    border: none;
    font-size: 16px;
    outline: none;
    background-color: transparent;
    cursor: text;
  }
`;

export const BotaoSalvar = styled.button`
  all: inherit;
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
  cursor: pointer;
`;


import styled from "styled-components";

export const Box = styled.div`
display: flex;
padding-right: 90px;
justify-content: center;
margin-bottom: 50px;

`
export const ButtonBack = styled.button`
  display: flex;
  justify-content: start;
  width: 80px;
  background-color: transparent;
  border: none;
`

export const GrupInput = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  label {
    display: flex;
    background-color: #8a8a8d51;
    padding: 10px;
    gap: 6px;
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
    cursor: pointer;
  }
`;

export const GrupButao = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const ButtonAdd = styled.button`
  padding: 8px 20px;
  width: fit-content;
  font-size: 16px;
  font-weight: 700;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

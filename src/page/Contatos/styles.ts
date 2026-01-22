import styled from "styled-components";

export const Content = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BoxList = styled.ul`
  width: 50%;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListaItens = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #8a8a8d;
  padding-top: 4px;

  p {
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: #000;
  }

  span {
    margin-bottom: 4px;
    font-size: 14px;
    color: #404043fb;
    padding-left: 30px;
  }
`;

export const GrupButton = styled.div`
  display: flex;
  gap: 4px;
  padding-left: 30px;
  margin-top: 8px;

  button {
    background-color: transparent;
    border: none;
  }
`;

export const BotaoNav = styled.button`
  background-color: transparent;
  border: none;
`;

export const BoxInput = styled.div`
  input {
    background-color: transparent;
    border: none;
    padding: 10px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-left: 25%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-left: 0px;
    gap: 50px;
  }
`;
export const Nav = styled.div`
  display: flex;
  gap: 5px;
`;

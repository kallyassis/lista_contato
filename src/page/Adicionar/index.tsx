import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { Container } from "../../styles/styleGlobal";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  ButtonAdd,
  ButtonBack,
  GrupButao,
  GrupInput,
} from "./styled";
import { AppDispatch } from "../../store";
import { addContact } from "../../store/reducer/ContactSlice";

const Adicionar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    dispatch(
      addContact({
        name,
        email,
        phone,
      })
    );

    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <Box>
            <ButtonBack onClick={() => navigate(-1)} type="button">
              <ArrowBack />
            </ButtonBack>
            <h2>Novo contato</h2>
          </Box>
          <GrupInput>
            <label htmlFor="name">
              <PersonOutlineIcon />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
              />
            </label>
            <label htmlFor="phone">
              <CallIcon />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(79) 9 9810-4335"
              />
            </label>
            <label htmlFor="email">
              <MailOutlineIcon />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
              />
            </label>
          </GrupInput>
          <GrupButao>
            <ButtonAdd onClick={() => navigate(-1)} type="button">
              Cancelar
            </ButtonAdd>
            <ButtonAdd type="submit">Salvar</ButtonAdd>
          </GrupButao>
        </Container>
      </form>
    </>
  );
};

export default Adicionar;

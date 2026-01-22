import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";

import { Container } from "../../styles/styleGlobal";
import { AppDispatch } from "../../store";
import {
  removeContact,
  setCurrentContact,
  setSearch,
  selectorFilteredContacts,
} from "../../store/reducer/ContactSlice";
import {
  BotaoNav,
  BoxIcon,
  BoxInput,
  BoxList,
  Content,
  GrupButton,
  ListaItens,
  Nav,
} from "./styles";
import { useState } from "react";

function Contatos() {
  const contacts = useSelector(selectorFilteredContacts);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Container>
        <BoxIcon>
          <div>
            <BotaoNav type="button">
              <ArrowBackIcon />
            </BotaoNav>
          </div>
          <h2>Telefone</h2>
          <Nav>
            <BotaoNav onClick={() => navigate("/adicionar")} type="button">
              <AddIcon />
            </BotaoNav>
            <BoxInput onClick={() => setShowSearch(!showSearch)}>
              <SearchIcon />
              {showSearch && (
                <input
                  type="text"
                  placeholder="Buscar contato..."
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => dispatch(setSearch(e.target.value))}
                />
              )}
            </BoxInput>
          </Nav>
        </BoxIcon>
        <Content>
          <p>{contacts.length} contatos com numeros de telefone</p>
          <BoxList>
            {contacts.map((contact) => (
              <ListaItens key={contact.id}>
                <p>
                  <AccountCircle sx={{ fontSize: 28, color: "#502000" }} />
                  {contact.name}
                </p>
                <span>{contact.phone}</span>
                <span>{contact.email}</span>
                <GrupButton>
                  <button
                    onClick={() => {
                      dispatch(setCurrentContact(contact));
                      navigate("/editar");
                    }}
                    type="button"
                  >
                    <EditIcon sx={{ fontSize: 20 }} />
                  </button>
                  <button
                    onClick={() => dispatch(removeContact(contact.id))}
                    type="button"
                  >
                    {" "}
                    <DeleteIcon sx={{ fontSize: 20 }} />
                  </button>
                </GrupButton>
              </ListaItens>
            ))}
          </BoxList>
        </Content>
      </Container>
    </>
  );
}

export default Contatos;

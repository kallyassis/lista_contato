import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState, AppDispatch } from "../../store";
import { removeContact, setCurrentContact } from "../../store/reducer/ContactSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import EditIcon from "@mui/icons-material/Edit";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container } from "../../styles/styleGlobal";
import {
  BotaoNav,
  BoxIcon,
  BoxList,
  Content,
  GrupButton,
  ListaItens,
  Nav,
} from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";

function Contatos() {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  

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
            <BotaoNav>
              <SearchIcon />
            </BotaoNav>
          </Nav>
        </BoxIcon>
        <Content>
          <p>{contacts.contats.length} contatos com numeros de telefone</p>
          <BoxList>
            {contacts.contats.map((contact) => (
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
                      navigate('/editar')
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

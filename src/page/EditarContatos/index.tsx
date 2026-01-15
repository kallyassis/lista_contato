import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

import { Container } from "../../styles/styleGlobal";
import { RootState } from "../../store";
import { editContact } from "../../store/reducer/ContactSlice";
import { BotaoSalvar, Content } from "./styles";

function EditarContato() {
  const contact = useSelector(
    (state: RootState) => state.contacts.currentContact
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: contact?.name ?? "",
    Phone: contact?.phone ?? "",
    email: contact?.email ?? "",
  });

  if (!contact) {
    return <p>Nenhum contato selecionado</p>;
  }

  const handleSave = () => {
    dispatch(editContact({ ...contact, ...form }));
    navigate("/");
  };

  return (
    <>
      <Container>
        <Content>
          <label htmlFor="name">
            <input
            type="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label htmlFor="phone">
            <input
            type="phone"
              value={form.Phone}
              onChange={(e) => setForm({ ...form, Phone: e.target.value })}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          <BotaoSalvar onClick={() => handleSave()} type="button">
            Salvar
          </BotaoSalvar>
        </Content>
      </Container>
    </>
  );
}

export default EditarContato;

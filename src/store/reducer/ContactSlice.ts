import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ContactState, Contact } from "../../types/Contact";
import { loadContacts, saveContacts } from "../../utils/storage";

const initialState: ContactState = {
  contats: loadContacts(),
  currentContact: null,
};

const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.contats.push(action.payload);
        saveContacts(state.contats);
      },
      prepare(contacts: Omit<Contact, "id">) {
        return {
          payload: {
            id: nanoid(),
            ...contacts,
          },
        };
      },
    },

    removeContact: (state, action: PayloadAction<string>) => {
      state.contats = state.contats.filter(
        (contact) => contact.id !== action.payload
      );
      saveContacts(state.contats);
    },

    setCurrentContact: (state, action: PayloadAction<Contact>) => {
      state.currentContact = action.payload;
      saveContacts(state.contats);
    },

    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contats.findIndex(
        (contact) => contact.id === action.payload.id
      );
      
      if (index !== -1) {
        state.contats[index] = action.payload;
      };

      saveContacts(state.contats);
    },
  },
});

export const { addContact, removeContact, setCurrentContact, editContact} =
  ContactsSlice.actions;

export default ContactsSlice.reducer;

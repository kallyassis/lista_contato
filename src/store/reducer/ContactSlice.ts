import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ContactState, Contact } from "../../types/Contact";
import { loadContacts, saveContacts } from "../../utils/storage";
import { RootState } from "..";

const initialState: ContactState = {
  contats: loadContacts(),
  currentContact: null,
  search: "",
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
        (contact) => contact.id !== action.payload,
      );
      saveContacts(state.contats);
    },

    setCurrentContact: (state, action: PayloadAction<Contact>) => {
      state.currentContact = action.payload;
      saveContacts(state.contats);
    },

    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contats.findIndex(
        (contact) => contact.id === action.payload.id,
      );

      if (index !== -1) {
        state.contats[index] = action.payload;
      }

      saveContacts(state.contats);
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const selectorFilteredContacts = (state: RootState) => {
  const { contats, search } = state.contacts;

  if (!search) return contats;

  return contats.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );
};

export const {
  addContact,
  removeContact,
  setCurrentContact,
  editContact,
  setSearch,
} = ContactsSlice.actions;

export default ContactsSlice.reducer;

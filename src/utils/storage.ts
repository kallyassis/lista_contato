import { Contact } from "../types/Contact";

export function loadContacts(): Contact[] {
  const data = localStorage.getItem("contacts");
  return data ? JSON.parse(data) : [];
}

export function saveContacts(contacts: Contact[]) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

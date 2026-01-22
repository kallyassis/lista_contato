export interface Contact {
  id: string; 
  name: string;
  phone: string;
  email: string;
}

export interface ContactState  {
  contats: Contact[];
  currentContact: Contact | null;
  search: string;
}

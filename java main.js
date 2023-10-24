// Create a new contact list.
const contactList = new ContactList();

// Add each contact to the list.
contacts.forEach(contact => {
  contactList.addContact(contact);
});
const contactos = [
  {
    nombre: "Juan",
    apellido: "García"
  },
  {
    nombre: "María",
    apellido: "Pérez"
  },
  {
    nombre: "Pedro",
    apellido: "López"
  }
];



// Return the contact list. 
return contactList;

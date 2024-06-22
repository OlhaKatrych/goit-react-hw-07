import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contactsArray from "../contactsArray.json";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsArray,
    loading: false,
    error: false,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

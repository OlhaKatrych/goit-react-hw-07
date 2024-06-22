import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function ContactList() {
  const contactValue = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContacts = contactValue.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <ul className={css.listContainer}>
      {filterContacts.map((contact) => (
        <li key={contact.id} className={css.listContact}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

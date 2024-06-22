import css from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className={css.rootContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}

export default App;

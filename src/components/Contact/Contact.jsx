import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={css.elemContainer}>
      <div className={css.textNumberContainer}>
        <p className={css.textName}>
          <span className={css.symbol}>
            <IoPersonSharp />
          </span>
          <b>{data.name}</b>
        </p>
        <p className={css.phone}>
          <span className={css.symbol}>
            <BsFillTelephoneFill />
          </span>
          <b>{data.number}</b>
        </p>
      </div>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => dispatch(deleteContact(data.id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
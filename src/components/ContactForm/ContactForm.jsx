import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Requred"),
  number: Yup.string().required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};
function ContactForm() {
  const dispatch = useDispatch();

  function handleSubmit(value, action) {
    dispatch(addContact(value));
    action.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <div className={css.containerForm}>
        <Form className={css.form}>
          <label htmlFor="">
            <span className={css.inputLabel}>Name</span>
            <Field type="text" name="name" className={css.field} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label htmlFor="">
            <span className={css.inputLabel}>Number</span>
            <Field type="text" name="number" className={css.field} />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
          <button type="submit" className={css.btnSubmit}>
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default ContactForm;

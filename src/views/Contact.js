import React from "react";
import { useFormik } from "formik";
import "./Contact.css";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "DU MÅSTE FYLLA I DETTA ADAM";
  } else if (values.firstName.length < 3) {
    errors.firstName = "KOM IGEN DU HAR DETTA!!!!!";
  }

  if (!values.lastName) {
    errors.lastName = "DU MÅSTE FYLLA I DETTA ADAM";
  } else if (values.lastName.length < 4) {
    errors.lastName = "A MEN HERREGUD KOM IGEN!";
  }

  if (!values.description) {
    errors.description = "DU MÅSTE FYLLA I DETTA ADAM";
  } else if (values.description.length < 30) {
    errors.description = "MINST 20 !! KOM IGEN!!";
  }

  if (!values.email) {
    errors.email = "DU MÅSTE FYLLA I DETTA ADAM";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "GLÖM INTE @ E DU INTE KLOK ELLER";
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="formen" onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="description">Message</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button id="butt" type="submit">
        Submit
      </button>
    </form>
  );
};
export default SignupForm;

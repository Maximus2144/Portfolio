

  //style={{width:'50%', margin:'0 auto'}
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from "semantic-ui-react";

const Forms = () => {
  /*const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      Phone: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string().requiered(true),
      lastName: Yup.string().requiered(true),
      email: Yup.string().requiered(true,"email es requerido"),
      Phone: Yup.string().requiered(false),
    }),
    const enviarFormulario =() => {

    }

    onSubmit: (values) => {
     alert(JSON.stringify(values, null, 2));
    },
  });

  return (

    <form onSubmit={formik.handleSubmit}>
      <h2>CotactMe</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.values.firstName}

      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.values.email}

      />
       <label htmlFor="Phone Number">Phone Number</label>
      <input
        id="Phone"
        name="Phone"
        type="Phone"
        onChange={formik.handleChange}
        value={formik.values.Phone}
        error={formik.values.Phone}

      />
      
     <input type="text"
          onChange={formik.handleChange}
          value={formik.values.text}
          error={formik.values.text} />
     
      <button type="submit">Submit</button>
    </form>
  );
};*/

}

      export default Forms

    /* const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      consulta: "",
    },
    onSubmit: (values) => {
      SendEmail(values);
    },
    validationSchema: basicSchemas,
  }); */





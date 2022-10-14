

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Forms = () => {
  const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // ACAconst SendEmail = async (object) => {
    // ACA VA LA LOGICA 

  const {
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

   validationSchema: yup.object().shape({
    nombre: yup
      .string("El nombre debe tener solamente letras")
      .required("El nombre es requerido"),
    apellido: yup
      .string()
      .required("El apellido es requerido"),
    email: yup
      .string()
      .required("El email es requerido"),
    telefono: yup
      .number()
      .required("El telefono es requerido"),
    consulta: yup
      .string()
      .required("Es necesario que comentes algo"),
  }),

    onSubmit: (values) => {
      console.log(values);
      SendEmail(values);
    },
   //validationSchema: basicSchemas,
  });


  return (
  <form className="col-6" onSubmit={  handleSubmit}
   >
           
           <label htmlFor=""> <span className="errores"></span></label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="First name"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              
            />
            {touched.nombre && errors.nombre && (
              <span className="errores">{errors.nombre}</span>
            )}

            <label htmlFor=""><span className="errores"></span></label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              aria-label="Last name"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.apellido && errors.apellido && (
              <span className="errores">{errors.apellido}</span>
            )}

            <label htmlFor=""><span className="errores"></span></label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <span className="errores">{errors.email}</span>
            )}

            <label htmlFor=""><span className="errores"></span></label>
            <input
              type="number"
              className="form-control"
              placeholder="Teléfono"
              aria-label="Teléfono"
              name="telefono"
              value={values.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.telefono && errors.telefono && (
              <span className="errores">{errors.telefono}</span>
            )}
            <label htmlFor=""><span className="errores"></span></label>
            <input
              type="text-area"
              className="form-control"
              placeholder="Consulta"
              aria-label="Consulta"
              name="consulta"
              value={values.consulta}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.consulta && errors.consulta && (
              <span className="errores">{errors.consulta}</span>
            )}





             <button type="submit">Submit</button>

          </form>
  );

};


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





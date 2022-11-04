

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Forms = () => {
  const form = useRef();

  const SendEmail = (e) => {
    //e.preventDefault();

    emailjs.sendForm('service_xuyb5fk', 'template_pk4kted', form.current, 'oBTved1xzVQ3Iw2SC')
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

    onSubmit: (values, onSubmit) => {
      console.log(values);
      SendEmail(values);
      onSubmit.resetForm()
    },
   //validationSchema: basicSchemas,
  });


  return (

  <form  ref={form} className="col-6" onSubmit={handleSubmit}
   >
    <div>ContactMe</div>
           <div style={{display: 'flex'}}>
            <div style={{marginRight: '10px'}}>
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
            </div>
            <div>
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
            </div>
             </div>
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
              type="tel"
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
            <textarea
              cols="10" rows="5" charswidth="23" 
              maxLength="2500"
              type="text-area"
              className="form-control"
              id="text-area"
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





             <button className="espacio" type="submit">Submit</button>

          </form>
  );

};


      export default Forms



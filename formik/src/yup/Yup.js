import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const YupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div  className='container'>
        <form onSubmit={formik.handleSubmit} className='form'>
      <label className='form-label' htmlFor="firstName">First Name</label>
      <input className='form-control'
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className='text text-danger' >{formik.errors.firstName}</div >
      ) : null}

      <label className='form-label' htmlFor="lastName">Last Name</label>
      <input className='form-control'
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className='text text-danger'>{formik.errors.lastName}</div >
      ) : null}

      <label className='form-label' htmlFor="email">Email Address</label>
      <input className='form-control'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className='text text-danger' >{formik.errors.email}</div >
      ) : null}

      <button className='btn btn-dark' type="submit">Submit</button>
    </form>
    </div >
  );
};
export default YupForm
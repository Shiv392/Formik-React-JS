import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '', firstname:'',lastname:'',password:''
    },
    onSubmit: values => {
         console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='form form-float'>
        <div className='m-2'>
        <label className='form-label' htmlFor='firstname'>FirstName:</label>
        <input className='form-control' id='firstname' name='firstname'
        value={formik.values.firstname} onChange={formik.handleChange}
        />
      </div>
      <div className='m-2'>
        <label className='form-label' htmlFor='lastname'>LastName:</label>
        <input className='form-control' id='lastname ' name="lastname"
        value={formik.values.lastname} onChange={formik.handleChange} />
      </div>
      <div className='m-2'>
      <label className='form-label' htmlFor="email">Email Address</label>
      <input className='form-control'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      </div>
      <div className='m-2'>
        <label className='form-label' htmlFor='password'>Password:</label>
        <input type='password' className='form-control' id='password' name="password"
        value={formik.values.password} onChange={formik.handleChange}
        />
      </div>
      
  <button className='btn btn-primary' type="submit">Submit</button>
    </form>
  );
};
export  default SignupForm
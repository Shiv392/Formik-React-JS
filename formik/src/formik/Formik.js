import React from 'react';
import { useFormik } from 'formik';

const validate=(values)=>{
    const errors={};
    if(!values.firstname){
        errors.firstname="firstname is required";
    }
    else if(values.firstname.length>15){
        errors.firstname="firstname must be 15 char or less"
    }
    if(!values.lastname){
        errors.lastname="lastname is required";
    }
    else if(values.lastname.length>15){
        errors.lastname="lastname must be 15 char or less";
    }
    if(!values.email){
        errors.email="Email is must"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="please enter valid email"
    }
    if(!values.password){
        errors.password="password is required"
    }
    else if(values.password.length<8){
        errors.password='password must have atleast 8 character'
    }
    return errors
}

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '', firstname:'',lastname:'',password:''
    },
    validate,
    onSubmit: values => {
         console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='form form-floating'>
        <div className='m-2'>
        <label className='form-label' htmlFor='firstname'>FirstName:</label>
        <input className='form-control' id='firstname' name='firstname'
        value={formik.values.firstname} onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.firstname ?<div className='text text-danger'>{formik.errors.firstname}</div> :null }
      </div>
      <div className='m-2'>
        <label className='form-label' htmlFor='lastname'>LastName:</label>
        <input className='form-control' id='lastname ' name="lastname"
        value={formik.values.lastname} onChange={formik.handleChange} 
        onBlur={formik.handleBlur} />
        { formik.errors.lastname ? <div className='text text-danger'>{formik.errors.lastname}</div> : null }
        </div>
      <div className='m-2'>
      <label className='form-label' htmlFor="email">Email Address</label>
      <input className='form-control'
        id="email"
        name="email"
        type="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      { formik.errors.email ? <div className='text text-danger'>{formik.errors.email}</div> : null }
      </div>
      <div className='m-2'>
        <label className='form-label' htmlFor='password'>Password:</label>
        <input type='password' className='form-control' id='password' name="password"
        value={formik.values.password} onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        { formik.errors.password ? <div className='text text-danger'>{formik.errors.password}</div> : null }
      </div>
      
  <button className='btn btn-primary' type="submit">Submit</button>
    </form>
  );
};
export  default SignupForm
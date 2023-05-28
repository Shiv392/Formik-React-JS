import './App.css';
import Form from './regular/Form';
import Formik from './formik/Formik';
import Yup from './yup/Yup';

function App() {
  return (
 <>
      <h1 className='text text-primary text-center'>Regular Form</h1>
      <Form />
      <h1 className='text text-success text-center'>Formik Form</h1>
      <Formik />
      <h1 className='text text-dark text-center' >Yup Form</h1>
      <Yup />
      </>
  );
}

export default App;

import './App.css';
import Form from './regular/Form';
import Formik from './formik/Formik';

function App() {
  return (
    <div className="App">
      <h1 className='text text-primary'>Regular Form</h1>
      <Form />
      <Formik />
    </div>
  );
}

export default App;

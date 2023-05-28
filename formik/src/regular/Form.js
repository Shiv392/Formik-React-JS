import React, { useEffect, useState } from 'react'

function Form() {
    const [input,setInput]=useState({
        firstname:'',lastname:'',email:'',address:''
    })
   
    const [isValidForm, setIsValidForm] = useState(false);
    const onFormSubmit=(e)=>{
        e.preventDefault();
      
       console.log(input);
     
    }
    useEffect(()=>{
        if(input.firstname.length>0 && input.lastname.length>0 && input.email.length>0){
            setIsValidForm(true);
        }
        else{
            setIsValidForm(false)
        }
    },[input])
    
  return (
    <div className='form container mt-5'>
      <div className='m-2'>
        <input type="text" onChange={e=> setInput({...input,firstname:e.target.value})} className='form-control' placeholder='Enter First Name' value={input.firstname} required />
      </div>
      
      <div className='m-2'>
        <input type='text' onChange={e=> setInput({...input,lastname:e.target.value})} className='form-control' placeholder='Enter Last Name' value={input.lastname} required />
      </div>
     
      <div className='m-2'>
        <input className='form-control' type="email"
        value={input.email} onChange={e=> setInput({...input,email:e.target.value})}
        placeholder='Enter Your Email' 
     />
      </div>
      
      <div className='m-2'>
        <input className='form-control' value={input.address}
        onChange={e=> setInput({...input,address:e.target.value})}
        placeholder='Enter Your Address' required
        />
      </div>
      
      <div className='m-3'>
        <button disabled={!isValidForm} onClick={onFormSubmit} type='submit' className='btn btn-dark'>Submit</button>
      </div>
    </div>
  )
}

export default Form

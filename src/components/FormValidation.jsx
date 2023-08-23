import React, { useState } from 'react'
import "./FormValidation.css"
const FormValidation = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [errors,setErrors]=useState('');

    const validation=()=>{
        const errors={};
        if(!name){
            errors.name='Name is required';        
    }
    if(!email){
        errors.email='Email is required';        
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Email is Invalid";
    }
    if(!password){
        errors.password='Password is required';        
    }
    else if(password.length<6){
        errors.password="Password must be at least 6 characters";
    }
    if(!confirmPassword){
        errors.confirmPassword='ConfirmPassword is required';        
    }
    else if(confirmPassword!==password){
        errors.confirmPassword="Password Do not Match";
    }
    if(!age){
        errors.age='Age is required';        
    }
    else if(isNaN(age) || age<18){
        errors.age="Age must be Greater then 18 and must be a number"
    }
    if(!gender){
        errors.gender='gender is required';        
    }
    console.log(errors)
    return errors;

}
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors=validation();
        if(Object.keys(validateErrors).length>0){
            setErrors(validateErrors);
        }
        else{
            console.log("Form Submitted Successfully");
        }


    }

    

  return (
    <>
    <div className='container'>
    <h1>FormValidation</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='name'>Name :</label>
            <input type='text' name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
           <span>{errors.name}</span>
            </div>
            <div>
            <label htmlFor='email'>Email :</label>
            <input type='email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <span>{errors.email}</span>
            </div>
            <div>
            <label htmlFor='password'>Password :</label>
            <input type='password' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <span>{errors.password}</span>
            </div>
            <div>
            <label htmlFor='confirmPassword'>ConfirmPassword :</label>
            <input type='password' name="'confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
           <span>{errors.confirmPassword}</span>
            </div>
            <div>
            <label htmlFor='Age'>Age :</label>
            <input type='text' name="'age" value={age} onChange={(e)=>setAge(e.target.value)}/>
           <span>{errors.age}</span>
            </div>
            <div>
            <label htmlFor='gender'>Gender :</label>
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
            <span>{errors.gender}</span>
            </div>
           
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
    
    
    </>
  )
}

export default FormValidation
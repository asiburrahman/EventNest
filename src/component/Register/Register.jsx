// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import { auth } from '../../firebase.init';

const Register = () => {
  const userInfo = use(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const {createUser, updateUserProfile, setUser, user} = userInfo
  const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        // const name = e.target.name.value
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        const email = e.target.mail.value
        const password = e.target.password.value
         console.log(name, photoUrl, email, password);
        //password Authentication
       
       
        // createUserWithEmailAndPassword(auth, email, password).then(result=>{
        //   console.log(result);
          
        // }).catch(error=>{
        //   console.log(error);
          
        // })
        createUser(email, password).then(result=>{
            // console.log(result);
            const userinfo = result.user
            updateUserProfile( name, photoUrl ).then(() => {

              setUser({...userinfo, name, photoUrl})
              console.log(userinfo);
              toast.success("User Login Successful!!");
              // setUser({...user, displayName: name, photoURL: photoUrl})
              // console.log(user);
              
              
            }).catch((error) => {
             console.log(error);
             setUser(userinfo)
             
            });
            navigate('/')
            
          }).catch(error=>{
            console.log(error, );
            
          })

       


    }

   
    return (
        <div className="card bg-base-100 mt-20 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-2xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">User Name</label>
          <input type="text" className="input" name='name' placeholder="User Name" />
          <label className="label" >User Photo URL</label>
          <input type="text" className="input" name='photoUrl' placeholder="User Photo Url" />
          <label className="label" >Email</label>
          <input type="email" className="input" name='mail' placeholder="Email" />
          <label className="label">Password</label>
          <div className='relative'>
            <input type={showPassword?"text":"password"} className="input" name='password' placeholder="Password" />
            <button onClick={()=> setShowPassword(!showPassword)} className='btn btn-xs absolute top-2 right-6'>{showPassword? <FaEye />: <FaEyeSlash />} </button>
          </div>
          
          
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
          
        <p>If You Already Have Account  <NavLink className='text-blue-400' to='/login'>Please Login</NavLink> </p>
      </div>
    </div>
    );
};

export default Register;
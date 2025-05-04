// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
// import { auth } from '../../firebase.init';

const Register = () => {
  const userInfo = use(AuthContext)
  const {createUser} = userInfo
  const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        // const name = e.target.name.value
        const email = e.target.mail.value
        const password = e.target.password.value
        // console.log(name, email, password);
        //password Authentication
       
       
        // createUserWithEmailAndPassword(auth, email, password).then(result=>{
        //   console.log(result);
          
        // }).catch(error=>{
        //   console.log(error);
          
        // })
        createUser(email, password).then(result=>{
            console.log(result);
            navigate('/')
            
          }).catch(error=>{
            console.log(error);
            
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
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
          <div className=' text-md font-bold text-center text-emerald-300'>Register With Google</div>
          <button className="btn bg-emerald-300 mt-1">Google Login</button>
        <p>If You Already Have Account  <NavLink className='text-blue-400' to='/login'>Please Login</NavLink> </p>
      </div>
    </div>
    );
};

export default Register;
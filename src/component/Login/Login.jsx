import React, { use, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


const Login = () => {
  const {singInUser, setUser} = use(AuthContext)
const location = useLocation()
  const navigate = useNavigate()
  const emailRef = useRef()

  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    
    singInUser(email, password).then((result) => {
      toast.success("Your registration is Successful, Thank you!!");
      // console.log("login successfully");
      
       navigate(location?.state || '/')
      
    })
    .catch((error) => {
      console.log(error);
      
    });;
    
  }

  const handleForget= ()=>{
   
    navigate(`/forgatePassword/${emailRef.current.value}`)
  }
    return (
    <div className="card bg-base-100 mt-20 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-2xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' ref={emailRef} placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a onClick={handleForget} className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <div className=' text-md font-bold text-center text-emerald-300'>Register With Google</div>
                  <button className="btn bg-emerald-300 mt-1">Google Login</button>
        <p>If You Have No Account  <NavLink className='text-blue-400' to='/register'>Please Register</NavLink> </p>
      </div>
    </div>
    );
};

export default Login;
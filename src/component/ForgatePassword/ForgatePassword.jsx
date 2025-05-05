
import { use } from 'react';
import {  useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgatePassword = () => {
   const userInfo = use(AuthContext)
    const{resetUserPassword} = userInfo

    

    const {email} = useParams()
   const handleUserPassword = (e)=>{
    e.preventDefault()
        resetUserPassword(email).then(() => {
            toast.success("A reset password link sent your mail, Please check your mail!!");
            window.location.href = 'https://www.gmail.com'
            // window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.success(`${errorMessage}`);
            // ..
          });
    }
    

    return (
                    <div className="w-7/12 mx-auto p-8 space-y-3 rounded-xl  dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Resetting The Password</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600 text-xl">Email</label>
                        <input type="email" value={email} name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-black dark:bg-white  focus:dark:border-violet-600 input" />
                    </div>
                    <button onClick={handleUserPassword}  className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Reset Password</button>
                    
                </form>
                
                
            </div>
    );
};

export default ForgatePassword;
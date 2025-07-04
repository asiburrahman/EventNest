import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Profile = () => {
    const {user, setUser,  updateUserProfile } = use(AuthContext)
    // console.log(userInfo);
   const handleUpdateUserData=(e)=>{
        e.preventDefault()
        const photo = e.target.photo.value
        const name = e.target.name.value
        updateUserProfile( name, photo ).then(() => {
            toast.success("Your Name & Photo URL is Update Successful, Thank you!!");
                      setUser({...user, name, photo})
                    //   console.log(userinfo);
                      
                      // setUser({...user, displayName: name, photoURL: photoUrl})
                      // console.log(user);
                      console.log(user);
                      
                      
                    }).catch((error) => {
                     
                     setUser(user)
                     toast.error(error.message);
                    });

    }
    
    return (
        <div >
            <ToastContainer />
                    <div className="max-w-md  p-8  sm:flex sm:space-x-6  dark:text-gray-800">
                <div className="flex-shrink-0 lg:w-full mb-6 lg:h-full sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div >
                        <h1>User Name</h1>
                        <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                        
                    </div>
                    <div className="space-y-1">
                    <h1>User mail</h1>
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-600">{user.email}</span>
                        </span>
                        
                    </div>
                    <div >
                        <h1>User Photo URL</h1>
                        <h2 className="text-sm lg:text-2xl font-semibold">{user.photoURL}</h2>
                        
                    </div>
                </div>

           
           
            </div>

            <div className=" bg-base-100 mt-20 w-full     ">
      <div className="card-body">
      <h1 className="text-2xl font-bold text-center">Update User Name And Photo URL!</h1>
        <form onSubmit={handleUpdateUserData} className="fieldset">
          <label className="label">User Name</label>
          <input required type="text" className="input w-full" name='name'  placeholder="Enter Your Name" />
          <label className="label">Photo URL</label>
          <input required type="text" className="input w-full" name='photo' placeholder="Enter Your Photo URL" />
          <button className="btn btn-neutral mt-4">Update</button>
        </form>
        
        
      </div>
    </div>
            </div>
    );
};

export default Profile;
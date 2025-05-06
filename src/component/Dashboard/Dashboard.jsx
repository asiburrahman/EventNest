
import { toast, ToastContainer } from 'react-toastify';



const Dashboard = () => {
    
   
    const handleInterest = (interest) => {
        toast.success(`You selected ${interest}. Thank you for your selection!`);
        // console.log(interest);
        
      };
    
    return (
        <div>
            <ToastContainer />
                        <div className="p-6 bg-base-100 rounded-lg  max-w-6xl mx-auto">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-primary">Let's make it personal</h2>
                <p className="text-base-content mt-1">Select your interests to get event suggestions based on what you love</p>
            </div>

            <div className="overflow-x-auto whitespace-nowrap py-2">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                    "Comedy", "Food", "Education", "Pop", "Design", "R&B", "Hip Hop / Rap", "Film",
                    "Personal health", "Blues & Jazz", "Travel", "Rock", "Yoga", "Country",
                    "Startups & Small Business", "Classical", "Mental health", "TV", "Alternative", "Musical"
                ].map((interest) => (
                    <button id='btnInterest' onClick={(e)=>handleInterest(e.target.innerText)} key={interest} className="btn btn-outline btn-sm rounded-full">
                    {interest}
                    </button>
                ))}
                </div>
            </div>

            <div className="mt-4">
                <a href="#" className="text-primary hover:underline">View all interests</a>
            </div>
            </div>

        </div>
    );
};

export default Dashboard;
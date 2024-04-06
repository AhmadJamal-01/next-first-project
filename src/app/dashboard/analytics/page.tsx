'use client'; 
import { useRouter } from "next/navigation";


function AnalyticsPage(){
    const router = useRouter();
    const handleBack = () => {
router.back()
    };
    return <div>
        <div>

        <button className="
        bg-gray-300 rounded-sm p-5 m-2 hover:bg-teal-300" onClick={handleBack}> Back</button>
        </div>
        <h1 className="hover:text-teal-300">
        Analytics Page Here.</h1> </div>;
}  

export default AnalyticsPage;
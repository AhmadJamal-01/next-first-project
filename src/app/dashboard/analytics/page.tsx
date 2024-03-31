'use client'; 
import { useRouter } from "next/navigation";


function AnalyticsPage(){
    const router = useRouter();
    const handleBack = () => {
router.back
    };
    return <div>
        <div>

        <button className="
        bg-gray-300 rounded-sm p-5 m-2 onClick={handleBack}"> Back</button>
        </div>
        
        Analytics Page Here. </div>;
}  

export default AnalyticsPage;
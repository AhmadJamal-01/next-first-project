'use client';
import { useRouter } from "next/navigation";

function SettingPage(){

const router= useRouter();
const handleBack = () => {
    router.back()
}

    return <div>  <h1 className="hover:text-teal-300">Setting Page Here. 
</h1>
<button className="bg-gray-300 rounded-sm p-5 m-2 hover:bg-teal-300" onClick={handleBack}>Go Back</button>
    </div>;
}  

export default SettingPage;
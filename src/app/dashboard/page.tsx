'use client';
import { useRouter } from "next/navigation";
//import Link from "next/link";
function DashboardPage() {
  const router = useRouter ();
  const handleBack = () => {

  router.back()
  };


  const handleforward = () => {

    router.forward()
    };
  return (
  
    <div>


<button className="bg-gray-300 rounded-sm p-5 m-2 hover:bg-teal-300 " onClick={handleBack}> GO Back </button>
<button className="bg-gray-300 rounded-sm p-5 m-2 hover:bg-teal-300" onClick={handleforward}> GO Forward </button>
<div>
      <button
          onClick={() => {
            router.push("./");
          }}
        >
        <h1 className="hover:text-teal-300">Now DashBoard Page Here"If You Want To Go <b>HOME Page</b> Click Here" Thank You!</h1>
        </button>
        <h1>
        <button
          onClick={() => {
            router.push("./dashboard/analytics");
          }}
        >
   <h1 className="hover:text-teal-300">  "If You Want To Go <b>ANALYTICS Page</b>  Click Here" Thank You!</h1>
        </button>
        </h1>
        <button
          onClick={() => {
            router.push("./dashboard/setting");
          }}
        >
       <h1 className="hover:text-teal-300"> "If You Want To Go <b>SETTING Page</b> Click Here" Thank You!</h1>
        </button>
        </div>


        
        
        {/* DashBoard Page Here.
      
        <h1>
          <Link href="/">
            Click Here, If You Want To Go Home Page.Thank You!
          </Link>
        </h1> */}
      
    </div>
  );
}

export default DashboardPage;

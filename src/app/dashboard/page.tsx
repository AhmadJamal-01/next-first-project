'use client';
import { useRouter } from "next/navigation";
//import Link from "next/link";
function DashboardPage() {
  const router = useRouter ();
  return (
  
    <div>

      <button
          onClick={() => {
            router.push("./");
          }}
        >
        Now DashBoard Page Here,"If You Want To Go Home Page Click Here" Thank You!
        </button>



        
        
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

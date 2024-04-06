'use client';
import { useRouter } from "next/navigation";
//import Link from "next/link";
function BlogPage() {
  const router = useRouter ();
  const handleBack = () => {
router.back
  };
  return (
  
    <div>

<button className="bg-gray-200 rounded-sm p-3 m-2 hover:bg-teal-300" onClick={handleBack}>Go Back</button>
<div>
    <button
          onClick={() => {
            router.push("./");
          }}
        >
   <h1 className="hover:text-teal-300">Now Blog Page Here,   
    "Click Here, IF You Want To Go <b>Home Page</b>." Thank You!</h1> 
        </button>
        </div>


      {/* Blog Page Here.
      
        <h1>
          <Link href="/">
            Click Here, IF You Want To Go Home Page.Thank You!
          </Link>
        </h1> */}
      
    </div>
  );
}

export default BlogPage;

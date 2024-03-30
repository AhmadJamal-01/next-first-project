'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
function BlogPage() {
  const router = useRouter ();
  return (
  
    <div>

    <button
          onClick={() => {
            router.push("./");
          }}
        >
    Now Blog Page Here,   
    "Click Here, IF You Want To Go Home Page Click Here"Thank You!
        </button>



      Blog Page Here.
      
        <h1>
          <Link href="/">
            Click Here, IF You Want To Go Home Page. Thank You!
          </Link>
        </h1>
      
    </div>
  );
}

export default BlogPage;

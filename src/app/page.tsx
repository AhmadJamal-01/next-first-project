"use client";
import { useRouter } from "next/navigation";
//import Link from "next/link";
function Home() {
  const router = useRouter();

  return (
    <div>
      Hello World
      <h1>PIAIC Batch 52</h1>
      <div>
        Ahmad Jamal.
        <h4 className="text-yellow-200">SIR JAHANZAIB ASSIGNMENT</h4>
      </div>
      <div>
      {/* Use ROUTER HOOK  */}
        <button
          onClick={() => {
            router.push("./blog");
          }}
        >
          <h1 className="hover:text-teal-300">Click Here, IF You Want To Go <b>BLOG PAGE </b>. Thank You!</h1>
        </button>
        <br />
        <button
          onClick={() => {
            router.push("./contact-us");
          }}
        >
          <h1 className="hover:text-teal-300">Click Here, IF You Want To <b> CONTACT US </b>with PIAIC Students. Thank You!</h1>
        </button>
        <br />
        <button
          onClick={() => {
            router.push("./dashboard");
          }}
        >
         <h1 className="hover:text-teal-300"> Click Here, IF You Want To Check <b>DASHBOARD PAGE</b>. Thank You!</h1>
        </button>
{/* <br/>
        // THROUGH LINK

  
          <Link href="/blog">
            Click Here, If You Want To Go Blog Page. Thank You!
          </Link>
        <br/>
        
          <Link href="/contact-us">
            Click Here, If You Want To Contact PIAIC Student. Thank You!
          </Link>
        <br/>
        
          <Link href="/dashboard">
            Click Here, If You Want To Check Dashboard Page. Thank You!
          </Link> */}
        
      </div>
    </div>
  );
}

export default Home;

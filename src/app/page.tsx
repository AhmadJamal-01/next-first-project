"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Home() {
  const router = useRouter();

  return (
    <div>
      Hello World
      <h1>PIAIC Batch 52</h1>
      <div>
        Ahmad Jamal.
        <h4>SIR JAHANZAIB ASSIGNMENT</h4>
      </div>
      <div>
        {/* Use ROUTER HOOK */}
        <button
          onClick={() => {
            router.push("./blog");
          }}
        >
          Click Here, IF You Want To Go Blog Page. Thank You!
        </button>
        <br />
        <button
          onClick={() => {
            router.push("./contact-us");
          }}
        >
          Click Here, IF You Want To Contact PIAIC Students. Thank You!
        </button>
        <br />
        <button
          onClick={() => {
            router.push("./dashboard");
          }}
        >
          Click Here, IF You Want To Check Dashboard Page. Thank You!
        </button>
<br/>
         THROUGH LINK
         <br/>
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
          </Link>
        
      </div>
    </div>
  );
}

export default Home;

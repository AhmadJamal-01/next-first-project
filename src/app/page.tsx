import Link from "next/link";
export default function Home() {
  return (
    <div>
      Hello World
      <h1>PIAIC Batch 52</h1>
      <div>
        Ahmad Jamal.
        <h4>SIR JAHANZAIB ASSIGNMENT</h4>
      </div>
      <div>
        <h1>
          <Link href="/blog">
            Click Here, If You Want To Go Blog Page. Thank You!
          </Link>
        </h1>
        <h1>
          <Link href="/contact-us">
            Click Here, If You Want To Contact PIAIC Student. Thank You!
          </Link>
        </h1>
        <h1>
          <Link href="/dashboard">
            Click Here, If You Want To Check Dashboard Page. Thank You!
          </Link>
        </h1>
      </div>
    </div>
  );
}

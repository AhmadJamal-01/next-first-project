import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex bg-teal-100 p-3 m-1 justify-between text-blue-600">

      <Link href="./"> Home</Link>
      <Link href="./blog"> Blog</Link>
      <Link href="./contact-us"> Contact Us</Link>
      <Link href="./dashboard"> Dashboard</Link>
    </div>
  );
}

export default Header;

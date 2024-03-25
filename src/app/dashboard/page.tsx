import Link from "next/link";

function DashBoardPage() {
  return (
    <div>
      DashBoard Page Here.
      <div>
        <h1>
          <Link href="/">
            Click Here, If You Want To Go Home Page. Thank You!
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default DashBoardPage;

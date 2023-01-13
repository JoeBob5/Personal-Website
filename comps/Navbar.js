import Link from "next/link";

function Navbar(){

  return(
    <nav>
      <div className="logo">
        <h1>MySite</h1>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="About">About</Link>
        <Link href="Blog">Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar; 
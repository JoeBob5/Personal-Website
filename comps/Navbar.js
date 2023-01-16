import Link from "next/link";

function Navbar(){

  return(
    <header className="main-navbar">
      <div className="logo">
        <h1>MySite</h1>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="Projects/">Work</Link>
        <Link href="Blog">Blog</Link>
      </nav>
    </header>
  )
}

export default Navbar; 
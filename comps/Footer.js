import Link from "next/link";

function Footer(){

  return(
    <footer className="website-footer-container">
      <div className="website-footer">
        <p>Built with <Link href="https://nextjs.org/" target="_blank">Next.js</Link></p>
      </div>
    </footer>
  )
}

export default Footer; 
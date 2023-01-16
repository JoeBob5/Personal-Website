import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="home-page">
      <Head>
        <title>MySite | Home</title>
      </Head>
      <section className="greeting">
        <h2>Hello, I'm <span className="golden">Dustin.</span></h2>
        <p>I am a <span className="golden">front-end developer.</span> I am currently writing simple front-end web applications using 
          HTML, CSS, JavaScript, and React. 
      </p>
      </section>
      <section className="coming-soon">
        <ul>What to expect in the future: </ul>
          <li>Blog: Deep dives into specific areas of programming</li>
          <li>Projects: More web applications and improved versions of existing ones</li>
          <li>Website: Original artwork and a logo</li>
      </section>
      
    </main>
  )
}

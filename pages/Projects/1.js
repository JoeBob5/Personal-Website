import Link from "next/link";

import BlogData from "../../data/BlogData";

function ProjectPage1(){
  const data = BlogData; 

  return(

    <article className="project-page">
      <nav className="navbar">
        <div>
          <h3>{ data[1].name }</h3>
        </div>
        <div>
          <Link target="_blank" href={ data[1].links.GitHub }>Code</Link>
          <Link target="_blank" href={ data[1].links.CodePen ? data[1].links.CodePen : data[1].links.Scrimba }>Demo</Link>
        </div>
      </nav>
      <p>Coming soon...</p>
      {/*
      <h3>{ data[id].about && "About" }</h3>
      <p> { data[id].about && data[id].about }</p>
      <h3> { data[id].purpose && "Purpose" }</h3>
      <p>{ data[id].purpose && data[id].purpose }</p>
      <h3>{data[id].process && "Process" }</h3>
      <p>{ data[id].process && data[id].process }</p>
      <h3>{ data[id].lessonsLearned && "Lessons Learned" }</h3>
      <p>{ data[id].lessonsLearned && data[id].lessonsLearned }</p>
      */}
      <Link href="/Projects/">{ `${String.fromCharCode(8592)} back` }</Link>
    </article>
  )
}

export default ProjectPage1; 
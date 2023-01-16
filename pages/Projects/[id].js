import { useRouter } from "next/router";
import Link from "next/link";

import BlogData from "../../data/BlogData";
import Project from "../../comps/Project";

function ProjectPage(){
  const router = useRouter();
  const { id } = router.query; 

  const data = BlogData; 

  return(

    <article className="project-page">
      <p> { data[id].name } </p>
      <h3>About</h3>
      <p> { data[id].about && data[id].about }</p>
      <h3> { data[id].purpose && "Purpose" }</h3>
      <p>{ data[id].purpose && data[id].purpose }</p>
      <h3>{data[id].process && "Process" }</h3>
      <p>{ data[id].process && data[id].process }</p>
      <h3>Lessons Learned</h3>
      <Link href="/Projects/">{ `${String.fromCharCode(8592)} back` }</Link>
    </article>
  )
}

export default ProjectPage; 
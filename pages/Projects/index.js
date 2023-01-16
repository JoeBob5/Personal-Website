import Head from "next/head";

// components 
import Project from "../../comps/Project";

// data 
import BlogData from "../../data/BlogData";
const projects = [...BlogData];  

const outputProjects = projects.map(project => {
  return <Project key={project.id} id={project.id} project={ project } /> 
})

function Projects(){

  return(
    <>
      <Head>
        <title>MySite | Work</title>
      </Head>
      {projects && outputProjects }
    </>
    
  )
}

export default Projects; 
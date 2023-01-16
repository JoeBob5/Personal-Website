import Image from "next/image";
import Link from "next/link";

function Project( { project }){

  return(

    <article className="project-preview">
      <div className="project-preview-text-container">
        <h4>{ project.name }</h4>
        <p> { project.description }</p>
        <Link href={ `/Projects/${ project.id }` }>{ "read more" }</Link>
      </div>
      <Link 
      className="project-preview-image-container"
      href={ project.links.CodePen ? project.links.CodePen : project.links.Scrimba }
      target="_blank">
        <Image 
          src={ project.img } 
          alt={`${project.name} screenshot`}
          width={200}
          height={125}
        /> 
      </Link>
      
      
    </article>
  )
}

export default Project; 
// import scss and projectcomponent and maybe json for projects
import '../stylesheets/project/project.css'
import PROJECTS from '../assets/project.json'
import ProjectComponent from './project-component'

export default function ProjectGallery(){
    return(



        
        <section className="portfolio" id="anchor-projects">
            <h2 className='portfolio-title'>Mes Projets</h2>
            <div className='portfolio-gallery'>
                {PROJECTS.map(project=>(
                    <ProjectComponent key={project.id} img={project.img} 
                    description={project.description} link={project.link} title={project.title} tags={project.tags}/>
                ))}
            </div>

        </section>
        /* Eventuellement rajouter un tri a l'avenir quand le nombre de projet sera plus conséquent */
    )
    
}
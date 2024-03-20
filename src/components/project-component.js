import React from "react";

export default function ProjectComponent({img,title,description,link,tags}){
    return(
        <div className="project">
            <img src={img} alt={title} className="project-img"/>

            <div className="project-hidden">
                <h3 className="project-title">{title}</h3>
                <a href={link} className="project-link">
                    <i className="fa-brands fa-github"></i>
                </a>
                <p className="project-description">{description}</p>

                <div className="project-skills">
                    {tags.map(tag=>(
                        <p key={tag}>{tag}</p>
                    ))}
                </div>


            </div>
            
        </div>
    )
}
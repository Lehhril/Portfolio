import React from 'react'
import { Icon } from '@iconify-icon/react';

const ProjectCard = ({title, desc, img, href}) => {

  return (
    <>
        <div className="project-card">
                           <div className='card-header'>
                             <h3 className='mb-10'>{title}</h3>
                            <p>{desc}</p>
                           </div>
                            <figure>
                                <img src={img} alt="project_pic" />
                            </figure>
                            <button className='btn-primary' to={href}>Learn More <Icon icon="system-uicons:arrow-top-right" width="24" height="24"  style={{color: "#fff"}} /></button>
                        </div>
    </>
  )
}

export default ProjectCard
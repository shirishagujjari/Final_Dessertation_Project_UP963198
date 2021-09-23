import React, {useEffect, useState} from 'react'
import ProjectLanguages from './ProjectLanguages'
import ProjectLinks from './ProjectLinks'
import {Container, Row, Col} from 'react-bootstrap'
// data
import data from '../Data/data'

const AllProjects = () => {
  const projects = data.projects
  // const [defaultProjects, setDefaultProjects] = useState(projects)
  // console.log(defaultProjects)

  // const [selectedFilter, setSelectedFilter] = useState('All')

  // useEffect(() => {
  //   projects.map((x) => {
  //     const f = x.projectTechStack
  //     const newState = []
  //     for (const property in f) {
  //       property === selectedFilter.toLowerCase().split(' ').join('')
  //         ? newState.push(x)
  //         : console.log('object')
  //     }
  //     setDefaultProjects(newState)
  //   })
  // }, [selectedFilter])

  return (
    <section className='all_projects'>
      <div className='section__title text-white'>
        <h1>My Projects</h1>
      </div>
      <Container>
        {/* <FilterProjects setSelectedFilter={setSelectedFilter} /> */}
        <Row>
          <Col>
            <div className='projects_wrapper'>
              {projects?.map((project) => (
                <div className='project_card' key={project.projectID}>
                  <a href={project.projectLinks.github}>
                    <div className='project_card_img'>
                      <img src={project.projectImage} alt='' />
                    </div>
                  </a>
                  <div className='project_description'>
                    <h3> {project.projectName} </h3>
                    <p>{project.projectDescription}</p>
                  </div>
                  <ProjectLanguages languages={project.projectTechStack} />
                  <ProjectLinks links={project.projectLinks} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProjects

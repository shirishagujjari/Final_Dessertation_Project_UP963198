import React from 'react'

// data
import data from '../Data/data'
import {SiGithub, SiCodepen, SiHackerrank} from 'react-icons/si'
import {Col, Container, Row} from 'react-bootstrap'
const ProjectsBanner = () => {
  const {github, codePen, hackerRank} = data.socialLinks
  return (
    <section className='projects_banner'>
      <Container>
        <Row>
          <Col>
            <div className='projects_content'>
              <h1>Talk is Cheap</h1>
              <h1>Show me the Code</h1>
              <p>- Linus Torvalds</p>
              <div className='projects_links'>
                {github !== '' && (
                  <a
                    href={github}
                    rel='noopener noreferrer'
                    className='github_projects_link'
                  >
                    <SiGithub className='icon' />
                  </a>
                )}
                {codePen !== '' && (
                  <a href={codePen} rel='noopener noreferrer'>
                    <SiCodepen className='icon' />
                  </a>
                )}
                {hackerRank !== '' && (
                  <a href={hackerRank} rel='noopener noreferrer'>
                    <SiHackerrank className='icon' />
                  </a>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProjectsBanner

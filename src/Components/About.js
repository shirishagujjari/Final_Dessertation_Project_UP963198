import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import data from '../Data/data'
import imgTwo from '../Assets/Image2.jpg'

const About = () => {
  const {caption, fullBio, designation1} = data?.personalInfo
  return (
    <div className='about' id='about'>
      <div className='section__title'>
        <h1>About</h1>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={7} xl={7} className='about__left__col'>
            <div className='about__left'>
              <h1>H!, {caption}</h1>
              <h1>{designation1}</h1>
              <p>{fullBio}</p>
              <a href='../Assets/Shirisha Gujjari.docx' download className='resume__btn'>
                Download Resume
              </a>
            </div>
          </Col>
          <Col sm={12} md={12} lg={5} xl={5} className='about__right__col'>
            <div className='about__right'>
              <div className='img__'>
                <Image src={imgTwo} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About

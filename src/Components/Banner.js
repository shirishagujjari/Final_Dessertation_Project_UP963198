import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import imgOne from '../Assets/Image1.jpg'
import data from '../Data/data'

const Banner = () => {
  const {caption, designation2, description} = data.personalInfo
  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={6}>
            <div className='banner__left'>
              <div className='content'>
                <h1>H!</h1>
                <h1>{caption}</h1>
                <h1>{designation2}</h1>
                <h5>{description}</h5>
                <a href='../Assets/Shirisha Gujjari.docx' download className='resume__btn'>
                  Download Resume
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} xl={6}>
            <div className='banner__right'>
              <div className='img__wrapper'>
                <Image src={imgOne} rounded />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner

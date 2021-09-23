import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ContactForm from './ContactFrom'
import {SiGmail} from 'react-icons/si'
import {FcHome, FcPhoneAndroid} from 'react-icons/fc'

// DATA
import data from '../Data/data'
import SocialLinks from './SocialLinks'

const Contact = () => {
  const {email, address, phoneNumber} = data.personalInfo
  return (
    <div className='contact' id='contact'>
      <div className='section__title'>
        <h1>Contact</h1>
      </div>
      <Container className='contact__container'>
        <Row>
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className='contact__left'>
              <div>
                <h2>I'd Love to hear from you</h2>
              </div>
              <div className='links'>
                <div className='add'>
                  <FcHome className='icon' />
                  <div>
                    <h4>Address</h4>
                    <p>{address}</p>
                  </div>
                </div>
                <div className='add'>
                  <FcPhoneAndroid className='icon' />
                  <div>
                    <h4>Let's Talk</h4>
                    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                  </div>
                </div>
                <div className='add'>
                  <SiGmail className='icon gmail' />
                  <div>
                    <h4>E-Mail</h4>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </div>
              </div>
              <div>
                <h2>I'm also on Social Networks</h2>
                <SocialLinks />
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className='contact__right'>
              <h2>Get in Touch</h2>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact

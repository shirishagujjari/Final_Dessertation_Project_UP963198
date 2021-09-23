import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import LoginForm from '../Components/LoginForm'

// DATA
import data from '../Data/data'

const Login = () => {
  const {email, address, phoneNumber} = data.personalInfo
  return (
    <div className='contact' id='contact'>
      <div className='section__title'>
        <h1>Login User</h1>
      </div>
      <Container className='contact__container'>
        <Row className="justify-center">
          <Col sm={12} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <div className='contact__right'>
              <h2>Login Details</h2>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login

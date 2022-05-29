import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Form } from '../form/Form';
import './Contact.css';

export const Contact = () => {
  return (
    <section id='contact'>
        <h2 className='text-center'>Get in Touch</h2>
        <Container className='container'>
            <Row>
                <Col lg='6' md='6'>
                <div className='contact_info-container d-flex align-items-center gap-5'>
                    <div className='single_info-box'>
                        <p style={{color: '#fff', fontSize: '1rem'}}>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
Simply fill the from and send me an email.</p>
                    </div>
                </div>
                <div className='contact_info-container d-flex align-items-center gap-5'>
                        <div className='single_info-box w-50'>
                            <h6>Address</h6>
                            <p>Bangladesh, Asian Country</p>
                        </div>
                        <div className='single_info-box w-50'>
                            <h6>Phone</h6>
                            <p>+880 151 671 5333</p>
                        </div>
                    </div>
                    <div className='contact_info-container d-flex align-items-center gap-5'>
                        <div className='single_info-box w-50'>
                            <h6>Email</h6>
                            <p>mostafarmstu@gmail.com</p>
                        </div>
                        <div className='single_info-box w-50'>
                            <h6>Location</h6>
                            <p>Cumilla, Bangladesh</p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <Form />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

import React, {useState} from 'react'
import { Col, Container, Row } from 'reactstrap'
import {FaFacebookF, FaLinkedin, FaTwitter} from "react-icons/fa";
import './About.css';
import aboutImg from './aboutImg.png'
import { Education } from "../education/Education";
import { Skills } from '../skills/Skills';
import { Activity } from '../activity/Activity';
import Typed from 'react-typed';

const fbUrl = 'https://www.facebook.com/golammostafarmstu';
const linkendUrl = 'https://www.linkedin.com/in/golam-mostafa-09b7811b7/';
const twitterUrl = 'https://twitter.com/MostafaRmstu';

export const About = () => {
  const [aboutFilter, setAboutFilter] = useState('ABOUT');
  return (
    <section id='about'>
        <Container>
            <Col lg='12' className='mb-5 header_about'>
                <h2 className='about_me_header'>About Me</h2>
            </Col>
            <Row>
                <div className='button_content-wrapper d-flex gap-4'>
                <Col lg='4' mb='3'>
                    <div className='about_btns d-flex flex-column align-items-center'>
                        <button className={`about_btn ${aboutFilter==='ABOUT' ? 'about_btn-active' : ''}`} onClick={()=> setAboutFilter('ABOUT')}>About Me</button>
                        <button className={`about_btn ${aboutFilter==='EDUCATION' ? 'about_btn-active' : ''}`} onClick={()=> setAboutFilter('EDUCATION')}>Education</button>
                        <button className={`about_btn ${aboutFilter==='SKILLS' ? 'about_btn-active' : ''}`} onClick={()=> setAboutFilter('SKILLS')}>Skills</button>
                        <button className={`about_btn ${aboutFilter==='ACTIVITY' ? 'about_btn-active' : ''}`} onClick={()=> setAboutFilter('ACTIVITY')}>Activities</button>                        
                    </div>
                </Col>

                <Col lg="8" md="9">
                    {
                        aboutFilter === 'ABOUT' && <div className='about_content_wrapper d-flex gap-5'>
                            <div className='about_img w-25'>
                                <img src={aboutImg} alt='about img' className='w-100' />
                            </div>

                            <div className='about_content'>
                                <h2>I'm Golam Mostafa</h2>
                                <Typed className='about_typed-text'
                                strings={[
                                'A hardworking and energetic programmer who cherishes a dream to change the world through coding and seeking an opportunity from a reputed company to explore latent talent and nourish skills.',
                                 'A']}
                                typeSpeed={30}
                                loop/>
                                <div className='social_links'>
                                    <span><a href={fbUrl}><FaFacebookF /></a></span>
                                    <span><a href={linkendUrl}><FaLinkedin /></a></span>
                                    <span><a href={twitterUrl}><FaTwitter /></a></span>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        aboutFilter === 'EDUCATION' && <Education />
                    }
                    {
                        aboutFilter === 'SKILLS' && <Skills />
                    }
                    {
                        aboutFilter === 'ACTIVITY' && <Activity />
                    }
                </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}

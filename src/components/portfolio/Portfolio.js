import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import weather from './image1-weather.png';
import ecom from './e-com.jpeg';
import cv from './cv.jpeg';
import lyrics from './img7.png'
import academy from './img8.png';
import img06 from './img6.png';
import NMC from './nasa.jpeg';
import quiz from './quiz.jpeg';
import './Portfolio.css'

const portfolioData = [
  {
    type: 'Backend Development',
    imgUrl: NMC,
    title: 'NASA Mission Control Node js App',
    url: 'https://rocky-fjord-66825.herokuapp.com/',
  },
  {
    type: 'Frontend Development',
    imgUrl: quiz,
    title: 'Quiz React App',
    url: 'https://golammostafa13.github.io/quize-app/',
  },
  {
    type: 'Frontend Development',
    imgUrl: cv,
    title: 'Create Your own CV',
    url: 'https://golammostafa13.github.io/cv-creator/',
  },
  {
    type: 'Frontend Development',
    imgUrl: ecom,
    title: 'Simple e-commerce React app',
    url: 'https://e-commerce-mostafa.netlify.app'
  },
  {
    type: 'Frontend Development',
    imgUrl: weather,
    title: 'World cities weather JS app',
    url: 'https://weather-app-mostafa.netlify.app'
  },
  {
    type: 'Frontend Development',
    imgUrl: lyrics,
    title: 'Lyrcis search with word JS app',
    url: 'https://hard-rock-api.netlify.app'
  },
  {
    type: 'Frontend Development',
    imgUrl: academy,
    title: 'Academic website HTML and CSS',
    url: 'https://nurkindergarten.netlify.app'
  },
  {
    type: 'Frontend Development',
    imgUrl: img06,
    title: 'Todo JS app',
    url: 'https://todo-list-mostafa.netlify.app'
  },
]
export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <Container>
        <Row>
          <Col lg='12' className='portfolio_top mb-5'>
            <h2 className='portfolio_top_header'>Portfolio</h2>
            <h6>Explore my work and give feedback</h6>
          </Col>

          {
            portfolioData.map((item, idx) =>(
              <Col lg='3' md='6' sm='6' key={idx}>
                <div className='portfolio_card'>
                  <div className='portfolio_img'>
                  <img src={item.imgUrl} alt="" className='w-100' />
                  </div>

                  <div className='portfolio_content'>
                    <div className='content_top'>
                      <h6>{item.type}</h6>
                    </div>
                    <h5>{item.title}</h5>
                    <a href={item.url} target="_blank">View live demo</a>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

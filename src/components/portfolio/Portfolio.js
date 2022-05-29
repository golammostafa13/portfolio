import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import img01 from './image1-weather.png';
import img02 from './image2-odin-ecom.png';
import img03 from './image4-cv.png';
import img04 from './img7.png'
import img05 from './img8.png';
import img06 from './img6.png';

import './Portfolio.css'

const portfolioData = [
  {
    imgUrl: img01,
    title: 'World cities weather JS app',
    url: 'https://weather-app-mostafa.netlify.app'
  },
  {
    imgUrl: img02,
    title: 'Simple e-commerce React app',
    url: 'https://e-commerce-mostafa.netlify.app'
  },
  {
    imgUrl: img03,
    title: 'CV-creator React app',
    url: 'https://cv-create.netlify.app/'
  },
  {
    imgUrl: img04,
    title: 'Lyrcis search with word JS app',
    url: 'https://hard-rock-api.netlify.app'
  },
  {
    imgUrl: img05,
    title: 'Academic website HTML and CSS',
    url: 'https://nurkindergarten.netlify.app'
  },
  {
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
              <Col lg='4' md='6' sm='6' key={idx}>
                <div className='portfolio_card'>
                  <div className='portfolio_img'>
                  <img src={item.imgUrl} alt="" className='w-100' />
                  </div>

                  <div className='portfolio_content'>
                    <div className='content_top'>
                      <h6>Frontend Development</h6>
                    </div>
                    <h5>{item.title}</h5>
                    <a href={item.url}>View live demo</a>
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

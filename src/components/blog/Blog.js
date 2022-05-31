import React from 'react'
import { Container } from 'reactstrap'
import './Blog.css'
import imgUrl from './fbPage.png';

const url ='https://www.facebook.com/LearnNewCode';
const title = 'Learn with Mostafa Page';

export const Blog = () => {
  return (
    <section id='blog'>
      <Container className='blog_header d-flex flex-column align-items-center justify-content-center'>
        <h2>Blog <p>comming soooon...</p></h2>
        <h2>Facebook Page</h2>
        <div className='blog_card'>
          <div className='blog_img'>
          <img src={imgUrl} alt="" />
          </div>

          <div className='blog_content'>
            <div className='content_top'>
              <h6>Facebook Page</h6>
            </div>
            <h5>{title}</h5>
            <a href={url}>View live demo</a>
          </div>
        </div>
      </Container>
    </section>
  )
}

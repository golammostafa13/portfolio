import React from 'react'
import Typed from 'react-typed'
const resumeUrl = 'https://drive.google.com/file/d/1wW-Cdqttwg10hA_uUW-mMzMCyhEmnImC/view?usp=sharing';

export const Header = () => {
  return (
    <div id = 'header' className='header-wraper'>
        <div className='main-info'>
            <h4>Hi, I am</h4>
            <h1>Golam Mostafa</h1>
            <Typed className='typed-text'
                strings={[
                'A Dedicated Coder',
                'A Dedicated Web Developer',
                'Machine Learning Enthusiastic']}
                typeSpeed={40}
                backSpeed={50} 
                loop/>
            <a href={resumeUrl} target="_blank" className='btn-main-resume'>Download Resume</a>
        </div>
    </div>
  )
}

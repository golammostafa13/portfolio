import React from 'react'
import './Skills.css';

const frontendSkills = [
    {
        title: 'Javascript',
        percentage: '85%'
    },
    {
        title: 'React.js',
        percentage: '75%'
    },
    {
        title: 'Redux',
        percentage: '70%'
    },
    {
        title: 'Next.js',
        percentage: '80%'
    }
];
const backendSkills = [
    {
        title: 'Node.js',
        percentage: '80%'
    },
    {
        title: 'Express.js',
        percentage: '75%'
    },
    {
        title: 'MongoDB',
        percentage: '90%'
    },
    {
        title: 'Socket.js',
        percentage: '70%'
    }
];

export const Skills = () => {
  return (
    <div className='skills_wrapper d-flex gap-4'>
        <div className='frontend_skill w-50'>
            {
                frontendSkills.map((item, idx) =>(
                    <div key={idx} className='skill_data mb-3'>
                        <div className='skill_title d-flex align-items-center justify-content-between'>
                            <h6>{item.title}</h6>
                            <span>{item.percentage}</span>
                        </div>
                        <div className='skill_bar'>
                            <span className='skill_bar-percentage' style={{width: `${item.percentage}`}}></span>
                        </div> 
                    </div>
                ))
            }
        </div>
        <div className='backend_skill w-50'>
            {
                backendSkills.map((item, idx) =>(
                    <div className='skill_data mb-3'>
                        <div className='skill_title d-flex align-items-center justify-content-between'>
                            <h6>{item.title}</h6>
                            <span>{item.percentage}</span>
                        </div>
                        <div className='skill_bar'>
                            <span className='skill_bar-percentage' style={{width: `${item.percentage}`}}></span>
                        </div> 
                    </div>
                ))
            }
        </div>
    </div>
  )
}

const SkillItem = ({title, percentage}) =>{
    return (
        <div className='skill_data mb-3'>
            <div className='skill_title d-flex align-items-center justify-content-between'>
                <h6>{title}</h6>
                <span>{percentage}</span>
            </div>
            <div className='skill_bar'>
                <span className='skill_bar-percentage' style={{width: `${percentage}`}}></span>
            </div> 
        </div>
    )
}

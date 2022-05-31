import React from 'react';
import './Activity.css';

export const Activity = () => {
  return (
    <div className='award_container d-flex align-items-center flex-wrap gap-2'>
      <div className='single_award'>
        <div className='award_year'>2019-2020</div>
        <h6 className='award_title' style={{textAlign: 'justify', lineHeight: '1.5rem'}}>
          Treasurer: <span>I was the Treasurer of a non-profit and well recongnized in all parts of Bangladesh blood donation organization BADHON RMSTU Unit. I served as Treasurer for year 2019-2020.</span>
        </h6>
      </div>
      <div className='single_award'>
        <div className='award_year'>2021</div>
        <h6 className='award_title' style={{textAlign: 'justify', lineHeight: '1.5rem'}}>
          Judge and Problem setter: <span>In my BSc student career, I was the Judge and Problem setter for "Independence Day Programming Contest-21".</span>
        </h6>
      </div>
    </div>
  )
}

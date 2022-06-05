import React, {useState} from 'react'
import './Form.css';

export const Form = () => {

    const {enteredName, setEnteredName} = useState('');
    const {enteredEmail, setEnteredEmail} = useState('');
    const {enteredMessage, setEnteredMessage} = useState('');
    const {enteredSubject, setEnteredSubject} = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('submitted');
    }

  return (
    <form className='form' onSubmit={submitHandler}>
        <div className='form_input'>
            <input type='text' placeholder="Your Name" value={enteredName} onChange={(e) => setEnteredName(e.target.value)}></input>
        </div>
        <div className='form_input'>
            <input type='email' placeholder="Your Email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)}></input>
        </div>
        <div className='form_input'>
            <input type='text' placeholder="Subject" value={enteredSubject} onChange={(e) => setEnteredSubject(e.target.value)}></input>
        </div>
        <div className='form_input'>
            <textarea placeholder="Write Message" value={enteredMessage} onChange={(e) => setEnteredMessage(e.target.value)}></textarea>
        </div>

        <button className='submit_btn' type='submit'>Send Message</button>
    </form>
  )
}

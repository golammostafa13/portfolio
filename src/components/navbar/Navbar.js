import React, {useRef, useEffect} from 'react'
import logo from '../../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Container} from 'reactstrap';
import './Navbar.css';

export const Navbar = () => {
   const navLinks = [
      {
         display: 'Home',
         url: '#header',
      },
      {
         display: 'About Me',
         url: '#about',
      },
      {
         display: 'Portfolio',
         url: '#portfolio',
      },
      {
         display: 'Blog',
         url: '#blog',
      },
      {
         display: 'Contact Me',
         url: '#contact',
      }
   ]
   const headerRef = useRef(null);

   useEffect(()=> {
      window.addEventListener('scroll', (e) =>{
         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('header_shrink')
         }else{
            headerRef.current.classList.remove('header_shrink');
         }
      })

      return  window.removeEventListener('scroll', ()=>{})

   }, [])

   const menuRef = useRef(null);

   const menuToggle = ()=> menuRef.current.classList.toggle('menu_active');

  return (
    <header className='header' ref={headerRef}>
       <Container>
         <div className='navigation d-flex align-items-center justify-content-between'>
            <div className='logo'><img src={logo} /></div>
            <div className='nav_menu' ref={menuRef} onClick={menuToggle} >
               <ul className='nav_list'>
                  {
                     navLinks.map(( item, idx ) => (
                        <li key={idx} className='nav_item'>
                           <a href={item.url}>{item.display}</a>
                        </li>))
                  }
               </ul>
            </div>
            <div className='nav-right '>
               <FontAwesomeIcon className='mobile_menu' icon={faBars} onClick={menuToggle} />
            </div>
         </div>
       </Container>
    </header>
  )
}

  
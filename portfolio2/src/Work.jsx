
import img from './assets/instagram.jpeg'
import img1 from './assets/linkedin.jpeg'
import img2 from './assets/x.jpeg'
import img3 from './assets/whatsapp.jpeg'

import  {useEffect, useRef, useState} from 'react'

function Work() {
  const [isVisible, setIsVisible] =useState(false)
    const elementRef =useRef(null)
    useEffect(() => {
        const ele =elementRef.current;
        if (!ele){
            return
        }
         const observer = new IntersectionObserver(([Entry]) =>{ 
            setIsVisible(Entry.isIntersecting);
        }, {threshold:0.8});
        observer.observe(ele)
        return () => {
            observer.unobserve(ele);
            
        };

    },[]);
  return (
    <>
    
    <div className={`level1 ${isVisible ? 'visible' : ''}`} ref={elementRef}>
     <nav>
        <ul className='nav-container'>
            <a href='/Home'> <li>Home </li></a>
            <a href='/About'> <li>ABOUT </li></a>
            <a href='/Work'> <li>WORK </li></a>
            <a href='/Service'><li>SERVICES </li></a>
            <a href='https://www.geeksforgeeks.org/what-is-full-stack-development/' className='button-nav1'>Discover about Development</a>
            <a href='/' className='button-nav'>HIT US UP</a>
        </ul>
        
        </nav> 

       </div>








    <div className="work-container">
      <h1>Our Work</h1>
      <p  >
        We take pride in delivering high-quality projects that meet our clients needs. Below are some examples of our recent work:
      </p>

      <div className="project-list">
        <div className="project">
          <h2>Project One</h2>
          <p className='work'>
            A responsive website used as a tool to track and manage personal tasks.
          </p>
          <a href="https://task-tracker-bzmw.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project">
          <h2>Project Two</h2>
          <p className='work'>
            Custom software developed for an e-commerce platform, improving efficiency and user experience.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project">
          <h2>Project Three</h2>
          <p className='work'>
            Mobile app developed for a healthcare provider, facilitating easy access to patient information and scheduling.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project">
          <h2>Project Four</h2>
          <p className='work'>
            Cloud solution implemented for a financial institution, ensuring data security and scalability.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>











    <div className="container-footer">
        
        <p >___________________________________________________</p>
    <footer>
        
       
        <a  href="https://www.instagram.com/"><img className='account' src={img}></img></a>
        <a href="https://www.linkedin.com/feed/"><img className='account' src={img1}></img></a>
        <a href="https://x.com/home"><img className='account' src={img2}></img></a>
        <a href="https://wa.me/250783979020"><img className='account' src={img3}></img></a>

        <p> Copyright &copy;{new Date().getFullYear()} Portfolio </p>
       
        </footer>
        <p >_____________________________________________________</p>
        </div>
        </>
  
  );
}

export default Work;

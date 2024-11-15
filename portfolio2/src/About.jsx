import img from './assets/instagram.jpeg'
import img1 from './assets/linkedin.jpeg'
import img2 from './assets/x.jpeg'
import img3 from './assets/whatsapp.jpeg'
import  {useEffect, useRef, useState} from 'react'

function About() {
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
    






        <div className="about-page">
            <h1>About Us</h1>
            <p>
                Welcome to our website! We are passionate about creating innovative web designs 
                and developing cutting-edge software solutions for the future.
            </p>
            <p>
                Our mission is to provide clients with user-friendly, scalable, and visually 
                appealing digital products that meet the growing demands of modern businesses.
            </p>
            <p>
                With a team of dedicated developers and designers, we specialize in:
            </p>
            <ul>
                <li>Responsive Web Design</li>
                <li>Custom Software Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Solutions</li>
            </ul>
            <p>
                We believe in delivering quality products that stand the test of time, ensuring 
                that your business has the tools it needs to thrive in the digital landscape.
            </p>
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

export default About;

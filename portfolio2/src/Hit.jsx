
import img from './assets/instagram.jpeg'
import img1 from './assets/linkedin.jpeg'
import img2 from './assets/x.jpeg'
import img3 from './assets/whatsapp.jpeg'
import pro  from './assets/pro.jpg'

import  {useEffect, useRef, useState} from 'react'

function Service() {

    const handleSendEmail = () => {
        const commentText = document.querySelector('.textarea').value;
    
       
        const email = 'habinezae73@gmail.com';
        const subject = 'New Comment Submitted';
        const body = encodeURIComponent(commentText);
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
        
        window.location.href = mailtoLink;
      };
    




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
           <a href='/' className='button-nav1'>Discover my Development</a>
           <a href='/' className='button-nav'>HIT US UP</a>
       </ul>
       
       </nav> 

      </div>


    <div className='hit'>

    <div className='hit1'>
       <img src={pro} ></img>
       
    </div>
    </div>



    <div className='hit2'>
       <p className='p5'>Link to us. </p >
       <p>Email:   habinezae73@gmail.com</p>
       <p>Contact:   250783979020</p>
       <p className='p6'>Comment:</p>
       <p><textarea placeholder='Type comment here' className='textarea' ></textarea></p>
       
       <button onClick={handleSendEmail}>Send Comment</button>
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

export default Service;

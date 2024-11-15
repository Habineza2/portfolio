import  {useEffect, useRef, useState} from 'react'
function Level1(){
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


//     const [scrolled, setScrolled] = useState(false)
//     useEffect(() => {
//         const handleScroll = () =>{
//             const scrollPosition = window.scrollY;
//             if (scrollPosition >0 ){
//                 setScrolled(true)
//             }
//             else{
//                 setScrolled(false)
//             }
//         };
//         return () => {
//         window.removeEventListener('scroll',handleScroll)
//     };
// },[])
    
    return(
    <div className={`level1 ${isVisible ? 'visible' : ''}`} ref={elementRef}>
        
     <nav>
        <ul className='nav-container'>
            <a href='/Home'> <li>Home </li></a>
            <a href='/About'> <li>ABOUT </li></a>
            <a href='/Work'> <li>WORK </li></a>
            <a href='/Service'><li>SERVICES </li></a>
            <a href='https://www.geeksforgeeks.org/what-is-full-stack-development/' className='button-nav1'>Discover about Development</a>
            <a href='/Hit' className='button-nav'>HIT US UP</a>
        </ul>
        
        </nav> 
          
    
    
    
    
    </div>)

}
export default Level1
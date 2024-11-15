import  {useEffect, useRef, useState} from 'react'
function Level3(){
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

    return(
    <div className={`level3 ${isVisible ? 'visible' : ''}`} ref={elementRef}>SkILL SET
    <div className="container">
    <div className="sub1_level3">Web Design by using React and node.js 
        <p className='p1'>I design web site as you want in minimal time. just try me </p>
    </div>
    <div className="sub2_level3"> Software Development by using python, SQL/PostgreSQL and javaScript
    <p className='p1'>I Develop Systems as you want in minimal time. just try me </p>
    </div>
    <div className="sub3_level3">System analysis
    <p className='p1'>I Analyze Systems and find something needed in system to work better as you want in minimal time. just try me </p>
    </div>
    </div>
    
     </div>)
}
export default Level3
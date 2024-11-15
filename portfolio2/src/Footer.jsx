import img from './assets/instagram.jpeg'
import img1 from './assets/linkedin.jpeg'
import img2 from './assets/x.jpeg'
import img3 from './assets/whatsapp.jpeg'
function Footer(){
    return(<>
        
        <div className="container-footer">
        
            <p >________________________________</p>
        <footer>
            
           
            <a  href="https://www.instagram.com/"><img className='account' src={img}></img></a>
            <a href="https://www.linkedin.com/feed/"><img className='account' src={img1}></img></a>
            <a href="https://x.com/home"><img className='account' src={img2}></img></a>
            <a href="https://wa.me/250783979020"><img className='account' src={img3}></img></a>

            <p> Copyright &copy;{new Date().getFullYear()} Portfolio </p>
           
            </footer>
            <p >________________________________</p>
            </div>
            </>
    )
}
export default Footer

import './index.css'
import Home from './Home';
import About from './About';
import Work from './Work';
import Service from './Service';
import Hit from './Hit'

function App() {
  
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Home />
      break

    case "/Home":
      Component = <Home />
      break
      
    case "/About":
      Component = <About/>
      
      break
    case "/Work":
      Component = <Work/>
      break
    case "/Service":
      Component = <Service/>
      break
    case "/Hit":
      Component = <Hit/>
      break  
    default:
      
  }
    

  return (
    
  <>
    {Component}
    
     
       </>
    
  )
}

export default App

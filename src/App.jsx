import About from "./pages/About"
import Choose from "./pages/Choose"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Stratagies from "./pages/Stratagies"
import Team from "./pages/Team"
import { BrowserRouter } from 'react-router-dom'





function App() {

  return (
    <>
    <BrowserRouter>
      <Home/>
      <About/>
      <Services/>
      <Stratagies/>
      <Choose/>
      <Team/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </>
     
  )
}

export default App

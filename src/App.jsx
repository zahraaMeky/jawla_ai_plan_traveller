import { useState } from 'react'
import { Button } from './components/ui/button'
import Hero from './components/custom/Hero'
import { Stories } from './stories/Stories'
import Testimonials from './testimonials/Testimonials'
import About from './about/about'
import { Footer } from './footer/Footer'
import Contact from './contact/Contact'
import Services from './services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Stories/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

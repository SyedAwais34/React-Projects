import './App.css'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'
function App() {

  return (
   <div>
    <Navigation />
    <div className='flex flex-col justify-end h-screen hero'>
    <Hero />
    <ContactForm />
    </div>
   </div>
  )
}

export default App

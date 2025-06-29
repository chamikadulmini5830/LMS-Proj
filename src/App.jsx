import { React } from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <Home />
      <Services />
      <Contact />
    </main>
  )
}

export default App

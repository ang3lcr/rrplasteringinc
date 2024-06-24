import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Finishes } from './pages/Finishes'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import {HashRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/finishes" element={<Finishes />}/>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App

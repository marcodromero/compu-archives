import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Guestbook from './pages/Guestbook'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import CD from './pages/CD'
import Sources from './pages/Sources'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/revistas" element={<Catalog />}/>
          <Route path="/comentarios" element={<Guestbook />}/>
          <Route path="/acerca" element={<About />}/>
          <Route path="/fuentes" element={<Sources />}/>
          <Route path="/cd/:code" element={<CD />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App

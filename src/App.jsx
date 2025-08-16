import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Guestbook from './pages/Guestbook'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import CD from './pages/CD'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/guestbook" element={<Guestbook />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cd/:code" element={<CD />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App

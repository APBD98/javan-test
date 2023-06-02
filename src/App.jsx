
import './main.css'
import DetailPage from './pages/DetailPage'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

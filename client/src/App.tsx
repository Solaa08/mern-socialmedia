import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import ProfilePage from './pages/profilePage'
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/profile/:userId" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom';
import Login from "./pages/Login"
import Register from "./pages/Register"
import ChatPage from "./pages/ChatPage"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<Navigate to = "/Login" />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/chat' element = {<ChatPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import {render} from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import './index.css'

import Login from './pages/Login'
import Home from './pages/Home'
import List from './pages/List'
import Register from './pages/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
)

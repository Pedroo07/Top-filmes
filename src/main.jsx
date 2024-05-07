import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Movie from './pages/Movie.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>} >
        <Route path='/Top-filmes' element={<Home/>}></Route>
        <Route path='movie/:id' element={<Movie/>}></Route>
        <Route path='search' element={<Search/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

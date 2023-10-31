import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from "./pages/CreateBooks"
import EditBook from "./pages/EditBook"
import ShowBook from "./pages/ShowBook"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/book/create" element={<CreateBooks/>} exact />
      <Route path="/book/details/:id" element={<ShowBook/>} exact />
      <Route path="/book/edit/:id" element={<EditBook/>} exact />
    </Routes>
  )
}

export default App

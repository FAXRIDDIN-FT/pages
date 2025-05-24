import React from 'react'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import Recipe from './pages/Recipe/Recipe'
import Post from './pages/Post/Post'
import Login from './pages/Login/Login'
import Layout from './pages/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/Recipe' element={<Recipe />} />
          <Route path='/Post' element={<Post />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
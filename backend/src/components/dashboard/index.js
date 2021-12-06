import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard'
import Blog from './pages/Blog'
import Notes from './pages/Notes'
import Tutorials from './pages/Tutorials'
import New from './pages/New'

export default function UI(){
	return (
		<BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/tutorials" element={<Tutorials />}/>
      <Route path="/notes" element={<Notes />}/>
      <Route path="/new" element={<New />}/>
    </Routes>
  </BrowserRouter>
	)
}
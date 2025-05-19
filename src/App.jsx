import { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Display from './components/Display'
import ActionList from './components/ActionList'
import ArticleList from './components/ArticleList'

function App() {
  return (
  <Router>
  <>
    < Header />
    <Routes>
      <Route path="/" element={<ActionList />}/>
      <Route path="/articles" element={<ArticleList />} />
    </Routes>
  </>
  </Router>
)
}
export default App

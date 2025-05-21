import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { UserProvider } from './components/UserContext'
import ActionList from './components/ActionList'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'

function App() {

  return (
  <UserProvider>   
    <Router>
      <>
        <Header />
          <Routes>
            <Route path="/" element={<ActionList />}/>
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
          </Routes>
      </>
    </Router>
  </UserProvider>
)
}
export default App

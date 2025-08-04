import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<div>Order Page Coming Soon!</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
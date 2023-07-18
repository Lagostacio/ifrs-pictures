import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Login, Photos, Header } from './components/index.js'

function App() {
  return (
    <>
    <Header />
    <div id='container'>

      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='*' element={<Login/>} />
      </Routes>
    
    </div>
    </>
  )
}

export default App

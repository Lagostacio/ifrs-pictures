import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Login, Photos } from './components/index.js'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='*' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App

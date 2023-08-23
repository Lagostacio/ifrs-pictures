import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Form,Feed} from './pages'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/feed' element={<Feed/>}/>
    </Routes>
  )
}

export default App

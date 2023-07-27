import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Login, Photos, Header } from './components/index.js'
import { AuthProvider } from './AuthContext';

function App() {


  return (
    <>

      <AuthProvider>
        <Header />
        <div id='container'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </div>

      </AuthProvider>
    </>
  )
}

export default App

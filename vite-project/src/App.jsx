import './App.css'
import { SignUpFour } from './components/signup'
import { SignInFour } from './components/login'
import { Home } from './components/home'
import { AuthContextProvider } from './contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Data from './components/data'
import { NavbarTwo } from './components/navbar'
import News from './components/News'
import Predictor from './components/Predictor'
import { ContactPageOne } from './components/ContactUs'


function App() {

  // console.log(process.env.REACT_APP_FIREBASE_API_KEY)

  return (
    <AuthContextProvider>


      <NavbarTwo />
      <Routes>

        <Route path='/' element={<ProtectedRoute> <News /> </ProtectedRoute>} />
        <Route path='/login' element={<SignInFour />} />
        <Route path='/signup' element={<SignUpFour />} />
        <Route path='/nifty50/data' element={<ProtectedRoute> <Data /> </ProtectedRoute>} />
        <Route path='/news' element={<ProtectedRoute> <News /> </ProtectedRoute>} />
        <Route path='/nifty50' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path='/predictor' element={<ProtectedRoute> <Predictor /> </ProtectedRoute>} />
        {/* <Route path='/contactUs' element={<ProtectedRoute> <ContactPageOne /> </ProtectedRoute>} /> */}

      </Routes>

    </AuthContextProvider>

  )
}

export default App

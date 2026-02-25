import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/Navbar'
import ProtectedRoutes from './routes/ProtectedRoutes'
import Home from './modules/Home'
import Auth from './modules/Auth'
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <Navbar />
    <Toaster position="top-right" reverseOrder={false} />
     <Routes>
        {/* Protected (for now, behaves like normal routes) */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

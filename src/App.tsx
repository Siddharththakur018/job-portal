import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/Navbar'
import ProtectedRoutes from './routes/ProtectedRoutes'
import Home from './modules/Home'

function App() {

  return (
    <>
    <Navbar />
     <Routes>
        {/* Protected (for now, behaves like normal routes) */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

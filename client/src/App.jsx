import{Route, Routes} from "react-router-dom";
import Login from './page/Login/Login'
import Register from './page/Register/Register'
import Home from './page/Home/Home'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/reg" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App

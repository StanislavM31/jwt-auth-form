import { Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";


export default function RoutesProvider(isAuth) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
    );
  }
}

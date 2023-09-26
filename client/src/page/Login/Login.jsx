import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import { useState } from "react";
import axios from 'axios'
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()

  const {logIn} = useAuth();

  const[data, setData] = useState({email:"", password:""});

  function change(event){
    setData({...data, [event.target.name]: event.target.value});
  }

  async function sendData(){
    const response = await axios.post("http://127.0.0.1:3001/user/auth", data, {withCredentials:true});
    console.log(response.data);
    logIn();
    navigate("/home");
  }
  return (
    <div>
      <Header />
      <h1>Sign In</h1>
      <p>
        Log in to access your account or create one. Verify your email for
        seamless access.
      </p>
      <div className={style.inputForm}>
        <div className={style.inputFormContainer}>
          <p>email</p>
          <input type="text" name="email" onChange={change} placeholder="Your email" />
        </div>
        <div>
          <p>password</p>
          <input type="text" name="password" onChange={change} placeholder="Must be at least 8 characters." />
        </div>
      </div>
      <div className={style.button} onClick={sendData} >Continue</div>
      <div className={style.text}>
        Not registered yet? <Link to={"/reg"} ><span>Sign Up</span></Link>
      </div>
    </div>
  );
}

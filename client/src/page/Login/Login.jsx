import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import { useState } from "react";
import axios from 'axios'

export default function Login() {
  const[data, setData] = useState({email:"", password:""});

  function change(event){
    setData({...data, [event.target.name]: event.target.value});
  }

  async function sendData(){
    console.log(data);
    const response = await axios.post("http://localhost:3001/auth", data);
    console.log(response.data);

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
      <div className={style.button} onClick={sendData}>Continue</div>
      <div className={style.text}>
        Not registered yet? <Link to={"/reg"}><span>Sign Up</span></Link>
      </div>
    </div>
  );
}

import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import {Link} from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const[data, setData] = useState({name:"", surname:"", email:"", password:""})

  async function sendData(){
  console.log(data);
  const response = await axios.post('http://localhost:3001/user', data);
  console.log(response.data[0]);
  }
  async function change(){
    setData({...data, [event.target.name]: event.target.value});
  }
  return (
    <>
      <Header />
      <div className={style.wrapper}>
      <h1>Welcome, let-s create an account</h1>
      <p>
        Create an account to keep track of your customers, and contributors.
        Once your account has been created then don’t forget to verify your
        account through mail.
      </p>
      <div>Sign Up</div>
      <div className={style.inputForm}>
        <div>
          <p>name</p>
          <input name = "name" onChange={change} type="text" placeholder="Your name" />
        </div>
        <div>
          <p>surname</p>
          <input name = "surname" onChange={change} type="text" placeholder="Your suname" />
        </div>
        <div>
          <p>email</p>
          <input name = "email" onChange={change} type="text" placeholder="Your email" />
        </div>
        <div>
          <p>password</p>
          <input name = "password" onChange={change} type="text" placeholder="must be 8 characters" />
        </div>
        <div className={style.button} onClick={sendData}>Continue</div>
        <div className={style.text}>
          Already registered?<Link to={'/'}><span> Sign In</span></Link>
        </div>
      </div>
      </div>
    </>
  );
}

import Header from "../../Components/Header/Header";
import style from "./style.module.scss";

export default function Login() {
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
          <input type="text" placeholder="Your email" />
        </div>
        <div>
          <p>password</p>
          <input type="text" placeholder="Must be at least 8 characters." />
        </div>
      </div>
      <div className={style.button}>Continue</div>
      <div className={style.text}>
        Not registered yet? <span>Sign Up</span>
      </div>
    </div>
  );
}

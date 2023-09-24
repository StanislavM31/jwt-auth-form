import style from "./style.module.scss";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className={style.header}>
      <p><Link to={"/"}>Sign in</Link></p>
      <p><Link to={"/reg"}>Sign up</Link></p>
    </div>
  );
}

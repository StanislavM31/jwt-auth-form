import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { token, logOut } = useContext(MyContext);
  const navigate = useNavigate();

  function logOutUser(){
    logOut();
    navigate('/');
  }

  return (
    <>
      {token ? (
        <p>
          <p onClick={logOutUser}>Sign out</p>

        </p>
      ) : (
        <div className={style.header}>
          <p>
            <Link to={"/"}>Sign in</Link>
          </p>
          <p>
            <Link to={"/reg"}>Sign up</Link>
          </p>
        </div>
      )}
    </>
  );
}

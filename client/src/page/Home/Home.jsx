import Header from '../../Components/Header/Header'
import style from "./style.module.scss"
import useAuth from '../../hook/useAuth';
import { useEffect } from 'react';


export default function Home() {
  const{token, logIn, logOut} = useAuth();
  useEffect(()=>{
    logIn()
  }, [])
  console.log(token);
  return (
    <>
        <Header/>
      <div className={style.container}>

      </div>
      <h3>вы вошли как пользователь{token}</h3>
    </>
  );
}

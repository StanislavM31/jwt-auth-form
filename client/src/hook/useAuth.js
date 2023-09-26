import cookie from "js-cookie"
import {useState} from "react"

export default function useAuth(){
    const [token, setToken] = useState(null);

    function logIn(){
        const cookieToken = cookie.get("access_token");

        setToken(cookieToken);
    }
    function logOut(){
        cookie.remove("access_token");
        setToken(null);
    }
    return {token, logIn, logOut};
}
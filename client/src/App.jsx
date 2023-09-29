
import MyContext from "./Context/Context";
import useAuth from "./hook/useAuth";
import RoutesProvider from "./RoutesProvider/RoutesProvider";

function App() {
  const auth = useAuth();
  const routes = RoutesProvider(auth.token);

  return (
    <>
      <MyContext.Provider value={auth} >
        {routes}
      </MyContext.Provider>
    </>
  );
}

export default App;

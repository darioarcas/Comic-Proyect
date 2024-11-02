import { useContext } from "react"
import { AuthContext } from "../auth/authContext";
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute = ({children}) => {
    // Extraemos la informacion del usuario atravez del hook useContext
    const {user} = useContext(AuthContext);

    // Utilizamos useLocation para guardar la informacion de la ultima ruta visitada
    // y asi, cuando el usuario se desloguea, una vez vuelto a loguearse lo redirecciona
    // donde estuvo por ultima vez
    const {pathname, search} = useLocation();

    localStorage.setItem('lastpath', pathname + search);

    console.log(pathname);
  return (user.logged) ? children : <Navigate to='/login'/>;
}

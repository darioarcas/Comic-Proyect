import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const navigate = useNavigate();


  const {dispatch} = useContext(AuthContext);

  const hadleLogin = ()=>{
    const action = {
      type: types.login,
      payload: {
        name: 'Dario'
      }
    }
    
    dispatch(action);

    const lastpath = localStorage.getItem('lastpath') || '/marvel';
    navigate(lastpath,{replace:true});
  }



  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button 
        className="btn btn-primary"
        onClick={()=>{hadleLogin()}}
        >
          Login
      </button>
    </div>
  )
}

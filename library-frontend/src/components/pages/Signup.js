import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper"

export const Signup = () => {

     const navigate = useNavigate();
     const { signup } = AuthData();
     const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, {userName: "", password: ""})
     const [ errorMessage, setErrorMessage ] = useState(null)
     
     const doSignup = async () => {

          try {
               
               await signup(formData.userName, formData.password)
               navigate("/account")

          } catch (error) {

               setErrorMessage(error)
               
          }
          
     }

     return (
          <div className="page">
               <h2>Sign Up page</h2>
               <div className="inputs">
                    <div className="input">
                        Username: 
                        <input value={formData.userName} onChange={(e) => setFormData({userName: e.target.value}) } type="text"/>
                    </div>
                    <div className="input">
                        Password: 
                        <input value={formData.password} onChange={(e) => setFormData({password: e.target.value}) } type="password"/>
                    </div>
                    <div className="button">
                         <button onClick={doSignup}>Sign up</button>
                    </div>
                    {errorMessage ?
                    <div className="error">{errorMessage}</div>
                    : null }
               </div>
          </div>
     )
}
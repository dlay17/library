import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper"

export const Signup = () => {

     const navigate = useNavigate();
     const { signup } = AuthData();
     const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, {userName: "", password: ""})
     const [ errorMessage, setErrorMessage ] = useState(null)
     
     const doSignup = async () => {
          if (formData.userName) {
               // Check if the username is an email using a regular expression
               const isEmail = /^\w+([-+.']\w+)*@[A-Za-z\d]+\.com$/.test(formData.userName);
           
               if (isEmail) {
                 try {
                   await signup(formData.userName, formData.password);
                   navigate("/account");
                 } catch (error) {
                   setErrorMessage(error);
                 }
               } else {
                 // Username is not a valid email
                 setErrorMessage("Please enter a valid email address (emails must end in .com)");
               }
          }
     }

     return (
          <div className="page">
               <h2>Sign Up page</h2>
               <div className="inputs">
                    <div className="input">
                        Email: 
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
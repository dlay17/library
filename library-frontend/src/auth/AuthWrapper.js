import { createContext, useContext, useState } from "react"
import { RenderHeader } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
    const LOGIN_API_URL = "http://localhost:3000/users/tokens"

    const [ user, setUser ] = useState({name: "", isAuthenticated: false})

    const login = (userName, password) => {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(LOGIN_API_URL + "/sign_in", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'email': userName,
                'password': password,
              }),
            });

            if (!response.ok) {
                // Was unable to retrieve an error message (possibly cors related)
                if(response.status == 401){
                    reject("Email or Password was incorrect");
                }
                reject("An error occurred during signup")
            }
      
            // If the response is okay, proceed with resolving the promise
            setUser({ name: userName, isAuthenticated: true });
            resolve("success");
          } catch (error) {
            // Handle unexpected errors, e.g., network issues, in the catch block
            reject({ message: 'An error occurred during signup' });
          }
        });
    };

    const signup = (userName, password) => {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(LOGIN_API_URL + "/sign_up", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'email': userName,
                'password': password,
              }),
            });

            if (!response.ok) {
                // Was unable to retrieve an error message (possibly cors related)
                if(response.status == 422){
                    reject("Email address already exists");
                }
                reject("An error occurred during signup")
            }
      
            // If the response is okay, proceed with resolving the promise
            setUser({ name: userName, isAuthenticated: true });
            resolve("success");
          } catch (error) {
            // Handle unexpected errors, e.g., network issues, in the catch block
            reject({ message: 'An error occurred during signup' });
          }
        });
    };
      
      
      

    const logout = () => {
        setUser({...user, isAuthenticated: false})
    }


    return (
          
        <AuthContext.Provider value={{user, login, signup, logout}}>
            <>
                    <RenderHeader />
                    <RenderMenu />
                    <RenderRoutes />
            </>
            
        </AuthContext.Provider>
          
    )

}
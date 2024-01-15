import { createContext, useContext, useState } from "react"
import { RenderHeader } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
    const LOGIN_API_URL = "http://localhost:4000/users/tokens"

    const [ user, setUser ] = useState({name: "", isAuthenticated: false})

    const login = (userName, password) => {

        // Make a call to the authentication API to check the username
          
        return new Promise((resolve, reject) => {

            if (password === "password") {
                setUser({name: userName, isAuthenticated: true})
                resolve("success")
            } else {
                reject("Incorrect password")
            }
        })
          
          
     }

    const signup = (userName, password) => {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(LOGIN_API_URL + "/sign_up", { // Move the parenthesis here
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userName,
                password,
              }),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            resolve(data);
          } catch (error) {
            reject(error);
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
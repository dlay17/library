import { AuthData } from "../../auth/AuthWrapper"

export const Home = () => {
    const { user } = AuthData();
    return (
         <div className="page">
              <h2>Home page</h2>
              <p>Welcome to the new boardpackager library</p>
              { user.isAuthenticated ? 
              <p>Click on the FileUpload tab to upload documents or in the FileDowload tab to download them</p>
              :
               <p>Please log in or create a new account to get started</p>}
         </div>
    )
}
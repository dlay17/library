import { Account } from "../pages/Account"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"
import FileUpload from "../pages/FileUpload"
import FileDownload from "../pages/FileDownload"

export const nav = [
     { path:     "/",               name: "Home",           element: <Home />,          isMenu: true,     isPrivate: false  },
     { path:     "/login",          name: "Login",          element: <Login />,         isMenu: false,    isPrivate: false  },
     { path:     "/signup",         name: "Signup",          element: <Signup />,       isMenu: false,    isPrivate: false  },
     { path:     "/fileupload",     name: "FileUpload",     element: <FileUpload />,    isMenu: true,     isPrivate: true   },
     { path:     "/filedownload",   name: "FileDownload",   element: <FileDownload />,  isMenu: true,     isPrivate: true   },
     { path:     "/account",        name: "Account",        element: <Account />,       isMenu: true,     isPrivate: true   },
]
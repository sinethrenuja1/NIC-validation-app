import Login from './Pages/Userauthentication/login'
import Register from './Pages/Userauthentication/register'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {path: "/",element: <Login />,},
  {path: "/register",element: <Register />,}
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App; // Add this line

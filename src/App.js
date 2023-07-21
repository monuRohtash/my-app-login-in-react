import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route
} from "react-router-dom";

import Login from "./pages/login";
import Products from "./pages/Products";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Update from "./pages/Update";
// import Display from "./pages/display";


const router = createBrowserRouter([
  { path: '/',
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
        { path: '/', element: <Home/> },
      // { path: 'Home', element: <Home/> },
      { path: 'login', element: <Login/> },
      { path: 'Products', element: <Products/> },
      { path: 'Signup', element: <Signup/> },
      { path: 'Post', element: <Post/> },
      { path: '/Update/:id', element: <Update/>}

    ],
  }]);

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;

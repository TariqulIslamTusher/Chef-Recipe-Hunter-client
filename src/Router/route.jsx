import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/loginRegistration/Login';
import Main from '../layouts/Main'
import Blog from '../components/pages/Blog';
import Home from '../components/pages/Home';
import Register from '../components/loginRegistration/Register';
import ErrorPage from '../components/pages/ErrorPage';


const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:4000/chefInfo')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            }]
    }
])

export default route;
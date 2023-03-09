import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import AboutUs from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Menu from './pages/Menu/Menu';
import ContactUs from './pages/Contact/Contact';
import Booking from './pages/Booking/Booking';
import Blog from './pages/Blog/Blog';

const router = createBrowserRouter([
  {path: '/', element: <Layout/>, children: [
    {path: '/', element: <Home/>},
    {path: '/signup', element: <Register/>},
    {path: '/about', element: <AboutUs/>},
    {path: '/login', element: <Login/>},
    {path: '/blogs', element: <Blogs/>},
    {path: '/blog/:id', element: <Blog/>},
    {path: '/menu', element: <Menu/>},
    {path: '/contact', element: <ContactUs/>},
    {path: '/booking', element: <Booking/>}

  ]}
])

function App() {

  return <RouterProvider router={router} />;
}

export default App

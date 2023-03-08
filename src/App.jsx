import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';

const router = createBrowserRouter([
  {path: '/', element: <Layout/>, children: [
    {path: '/', element: <Home/>},
    {path: '/signup', element: <Register/>},
    {path: '/about', element: <About/>},
    {path: '/login', element: <Login/>},
    {path: '/blogs', element: <Blogs/>}

  ]}
])

function App() {

  return <RouterProvider router={router} />;
}

export default App

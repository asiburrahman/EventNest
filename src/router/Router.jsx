import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React, { Children, Component } from "react";
  import ReactDOM from "react-dom/client";
import Root from "../lyout/Root";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import PrivetRoutes from "../Routes/PrivetRoutes";
import Dashboard from "../component/Dashboard/Dashboard";
import Error from "../component/Error/Error";
import Loading from "../component/Loading/Loading";
import EventDetails from "../component/Pages/EventDetails";
import ForgatePassword from "../component/ForgatePassword/ForgatePassword";
import Profile from "../component/Profile/Profile";
import LoginProtectedRouts from "../Routes/LoginProtectedRouts";
  
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            Component: Home,
            hydrateFallbackElement: <Loading></Loading>,
            loader: ()=> fetch('../event.json')
        },
        // {
        //   path: '/login',
        //   Component: Login,
        // },
        // {
        //   path: '/login',
        //   element: <PrivetRoutes><Login></Login></PrivetRoutes>
        // },

        {
          path: '/login',
          element: <LoginProtectedRouts><Login></Login></LoginProtectedRouts>
        },

        // {
        //   path: '/register',
        //   Component: Register,
        // },

        {
          path: '/register',
          element: <LoginProtectedRouts><Register></Register></LoginProtectedRouts>
        },
        
        {
          path: '/dashboard',
          element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>
        },
        {
          path:'/eventDetails/:Eventid',
          element: <PrivetRoutes><EventDetails></EventDetails></PrivetRoutes>,
          hydrateFallbackElement: <Loading></Loading>,
            loader: ()=> fetch('../event.json')
          
        },

        {
          path: '/forgatePassword/:email',
          element: <ForgatePassword></ForgatePassword>
        },
        {
          path: '/profile',
          element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
        },
        
      ]

    },
    
   
  ]);

  export default router
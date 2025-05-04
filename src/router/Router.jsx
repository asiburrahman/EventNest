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
import Order from "../component/Order/Order";
import PrivetRoutes from "../Routes/PrivetRoutes";
import Dashboard from "../component/Dashboard/Dashboard";
import Error from "../component/Error/Error";
import Loading from "../component/Loading/Loading";
  
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>,
      children:[
        {
            index: true,
            Component: Home,
            hydrateFallbackElement: <Loading></Loading>,
            loader: ()=> fetch('./event.json')
        },
        {
          path: '/login',
          Component: Login,
        },
        {
          path: '/register',
          Component: Register,
        },
        {
          path: '/order',
          element: <PrivetRoutes><Order></Order></PrivetRoutes>
        },
        {
          path: '/dashboard',
          element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>
        },
        
      ]

    },
    
   
  ]);

  export default router
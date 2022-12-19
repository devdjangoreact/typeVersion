// ** Router imports
import { useRoutes, Navigate } from "react-router-dom";

// ** Layouts
import Layout from "../layouts/Layout";

// ** Router imports
import { lazy } from "react";

// ** GetRoutes
import { getRoutes } from "./routes";

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "../utility/Utils";

// import React from "react";
// import { Routes, Route } from "react-router-dom";
import { HomePage } from "../views/pages/HomePage";
import { FavouritesPage } from "../views/pages/FavouritesPage";
import Registration from "../views/pages/authentication/Registration";
import Login from "../views/pages/authentication/Login";

const Router = () => {
  // const allRoutes = getRoutes();

  const getHomeRoute = () => {
    const user = getUserData();
    if (user) {
      return getHomeRouteForLoggedInUser(user.groups[0].name);
    } else {
      return "/login";
    }
  };

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: "/login",
      children: [{ path: "/login", element: <Login /> }],
    },
    {
      path: "/register",
      children: [{ path: "/register", element: <Registration /> }],
    },
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
    {
      path: "/favourites",
      element: <Layout />,
      children: [{ path: "/favourites", element: <FavouritesPage /> }],
    },
    // {
    //   path: "*",
    //   element: <Layout />,
    //   children: [{ path: "*", element: <Error /> }],
    // },
    // ...allRoutes,
  ]);

  return routes;
};

export default Router;

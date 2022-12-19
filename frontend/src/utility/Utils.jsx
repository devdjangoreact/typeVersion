import React from "react";
import { DefaultRoute } from "../router/routes";

/**
 *  @param {String} userRole Role of user
 */

export const isUserLoggedIn = () => localStorage.getItem("userInfo");
export const getUserData = () => JSON.parse(localStorage.getItem("userInfo"));

export const getHomeRouteForLoggedInUser = (user) => {
  console.log(user);
  if (user === undefined) return "/login";
  if (user.isAdmin) return DefaultRoute;
  if (user === "admin") return DefaultRoute;
  if (user) return DefaultRoute;
  if (user === "client") return "/access-control";
  localStorage.removeItem("userInfo");
  return "/login";
};

const Utils = () => {
  return <div>Utils</div>;
};

export default Utils;

export function status(res) {
  // res.ok
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  }
  throw new Error(res.statusText);
}

import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
// import { loginAction } from "../../../redux/UserRedux";
import { useDispatch, useSelector } from "react-redux";

import { Input, Message, Loader } from "../../../components";

// ** Utils
import { getHomeRouteForLoggedInUser } from "../../../utility/Utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { error, loading, userInfo } = userLogin;

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(loginAction(email, password));
  // };

  // if (userInfo) {
  //   const getHomeRoute = getHomeRouteForLoggedInUser(userInfo);
  //   return <Navigate to={getHomeRoute} />;
  // }

  return (
    <form
      className="h-screen flex flex-col justify-center items-center bg-blue-50"
      // onSubmit={submitHandler}
    >
      <div
        className="flex flex-col justify-center items-center border-4
       border-amber-300 py-20 p-8 rounded-lg bg-orange-50"
      >
        {/* {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />} */}
        <span className="text-4xl m-2">LOGIN</span>
        <Input
          className="text-xl m-2 w-96"
          placeholder="email"
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setEmail(e.target.value)
          }
        />
        <Input
          className="text-xl m-2 w-96"
          placeholder="password"
          value={password}
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setPassword(e.target.value)
          }
        />
        <div className="m-2 w-96 flex justify-start ">
          <button
            className="text-lg m-2 w-48 text-blue-600 bg-orange-200"
            type="submit"
          >
            Sign In
          </button>
          <label className="text-lg pl-8 m-2 w-64 ">
            <p>
              New Customer?
              <Link
                className="text-xl m-2 w-64 text-center text-blue-600"
                to={"/register"}
              >
                Register
              </Link>
            </p>
          </label>
        </div>
      </div>
    </form>
  );
};

export default Login;

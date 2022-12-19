import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
// import { register } from "../../../redux/UserRedux";
import { useDispatch, useSelector } from "react-redux";

import { Input, Message, Loader } from "../../../components";
// ** Utils
import { getHomeRouteForLoggedInUser } from "../../../utility/Utils";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // const userRegister = useSelector((state) => state.userRegister);
  // const { error, loading, userInfo } = userRegister;

  // if (userInfo) {
  //   const getHomeRoute = getHomeRouteForLoggedInUser(userInfo);
  //   return <Navigate to={getHomeRoute} />;
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     setMessage("Passwords do not match");
  //   } else {
  //     dispatch(register(username, email, password, confirmPassword));
  //   }
  // };

  return (
    <form
      className="h-screen flex flex-col justify-center items-center  bg-blue-50"
      // onSubmit={submitHandler}
    >
      <div
        className="flex flex-col justify-center items-center border-4 
       bg-orange-50 border-amber-300 py-16 p-4 rounded-lg"
      >
        {/* {message && <Message >{message}</Message>}
        {error && (
          <Message  >
            {error}
          </Message>
        )}
        {loading && <Loader />} */}
        <span className="text-4xl m-2">Register</span>
        <Input
          className="text-xl m-2 w-96"
          placeholder="Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setUsername(e.target.value)
          }
          type="text"
          value={username}
        />
        <Input
          className="text-xl m-2 w-96"
          placeholder="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setEmail(e.target.value)
          }
          type="email"
          value={email}
        />

        <Input
          className="text-xl m-2 w-96"
          placeholder="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setPassword(e.target.value)
          }
          type="password"
          value={password}
        />
        <Input
          className="text-xl m-2 w-96"
          placeholder="confirm password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setConfirmPassword(e.target.value)
          }
          type="password"
          value={confirmPassword}
        />
        <div className=" m-2 w-96 flex justify-start ">
          <button
            className="text-lg m-2 w-48 text-blue-600 bg-orange-200"
            type="submit"
          >
            Sign In
          </button>
          <label className="text-lg pl-8 m-2 w-64 ">
            <p>
              Have an Account?
              <Link
                className="text-xl m-2 w-64 text-center text-blue-600"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </label>
        </div>
      </div>
    </form>
  );
};

export default Register;

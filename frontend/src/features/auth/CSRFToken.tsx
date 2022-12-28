import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie, setCookie } from "typescript-cookie";

type tokentype = { token: string };

const csrftoken: string | undefined = getCookie("csrftoken");

export const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRFToken": csrftoken,
  },
  credentials: true,
};

const CSRFToken = () => {
  const [csrftoken, setcsrftoken] = useState("");

  useEffect(() => {
    const CsrfToken = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API}/auth/csrf_cookie`
      );
      return response.data;
    };

    const promise = CsrfToken();
    promise.then((data) => {
      setCookie("csrftoken", data.CSRF_COOKIE);
      setcsrftoken(data.CSRF_COOKIE);

      // expected output: "Success!"
    });
  }, []);

  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CSRFToken;

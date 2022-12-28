import axios from "axios";
import { PostGet, FormConnect } from "../models/Post.interface";

const getPosts = async (categorySlug: string) => {
  const response = await axios.get<PostGet[]>(
    `${process.env.REACT_APP_BASE_API}/${categorySlug}/posts/`
  );

  return response;
};

const getPost = async (id: string | undefined) => {
  const response = await axios.get<PostGet>(
    `${process.env.REACT_APP_BASE_API}/post/${id}/`
  );

  return response;
};

const updatePost = async (
  form: FormConnect
): Promise<{ post: PostGet | undefined }> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "X-CSRFToken": Cookies.get("csrftoken"),
      // Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const response = await axios.put(
    `http://127.0.0.1:8000/post/${form["id"]}/`,
    form,
    config
  );

  return response.data;
};

const createPost = async (
  form: FormConnect
): Promise<{ post: PostGet | undefined }> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "X-CSRFToken": Cookies.get("csrftoken"),
      // Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const response = await axios.post(
    `http://127.0.0.1:8000/posts/`,
    form,
    config
  );

  return response.data;
};

const deletePost = async (id: string | undefined) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "X-CSRFToken": Cookies.get("csrftoken"),
      // Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const response = await axios.delete(
    `http://127.0.0.1:8000/post/${id}/`,

    config
  );

  return response.data;
};

const authService = {
  getPosts,
  getPost,
  updatePost,
  createPost,
  deletePost,
};

export default authService;

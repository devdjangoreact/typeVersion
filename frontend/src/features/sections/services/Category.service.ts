import axios from "axios";
import { CategoryGet, FormConnect } from "../models/Category.interface";

const getCategorys = async () => {
  const response = await axios.get<CategoryGet[]>(
    `${process.env.REACT_APP_BASE_API}/category/`
  );
  return response;
};

const getCategoryDepth = async () => {
  const response = await axios.get<CategoryGet[]>(
    `${process.env.REACT_APP_BASE_API}/categorydepth/`
  );
  return response;
};

const getCategory = async (slug: string | undefined) => {
  const response = await axios.get<CategoryGet | null>(
    `${process.env.REACT_APP_BASE_API}/category/${slug}`
  );
  return response;
};

const getCategorySlug = async (slug: string | undefined) => {
  const response = await axios.get<CategoryGet | null>(
    `${process.env.REACT_APP_BASE_API}/categoryslug/${slug}`
  );
  return response;
};

const updateCategory = async (
  form: FormConnect
): Promise<{ category: CategoryGet | null }> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "X-CSRFToken": Cookies.get("csrftoken"),
      // Authorization: `Bearer ${userInfo.token}`,
    },
  };
  const response = await axios.put(
    `http://127.0.0.1:8000/category/${form["id"]}/`,
    form,
    config
  );
  return response.data;
};

const createCategory = async (
  form: FormConnect
): Promise<{ category: CategoryGet | null }> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "X-CSRFToken": Cookies.get("csrftoken"),
      // Authorization: `Bearer ${userInfo.token}`,
    },
  };
  console.log(form);
  const response = await axios.post(
    `http://127.0.0.1:8000/category/`,
    form,
    config
  );
  return response.data;
};

const deleteCategory = async (id: string | undefined) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "X-CSRFToken": Cookies.get("csrftoken"),
      // Authorization: `Bearer ${userInfo.token}`,
    },
  };
  const response = await axios.delete(
    `http://127.0.0.1:8000/category/${id}`,

    config
  );
  return response.data;
};

const authService = {
  getCategorys,
  getCategoryDepth,
  getCategory,
  getCategorySlug,
  updateCategory,
  createCategory,
  deleteCategory,
};

export default authService;

import React, { useEffect, useState } from "react";
import { PostGet } from "../../../features/sections/models/Post.interface";
import { CategoryGet } from "../../../features/sections/models/Category.interface";
import { TfiSave } from "react-icons/tfi";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import PostForm from "./PostForm";
import { MdAddCircleOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import {
  deleteCategory,
  getCategorySlug,
  updateCategory,
} from "../../../features/sections/categorySlite";

import { useNavigate, useParams } from "react-router-dom";
import { createPost, getPosts } from "../../../features/sections/postsSlite";
interface Props {
  posts?: PostGet[];
  edit?: boolean;
  category?: CategoryGet;
  categorys?: CategoryGet[];
}

const Scrollspy = ({ categorys }: Props) => {
  const [nameCategory, setNameCategory] = useState("");
  const [slugCategory, setSlugCategory] = useState("");
  const [parent, setParent] = useState("");
  const navigate = useNavigate();
  const [editCategory, setEditCategory] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const params = useParams();
  const dispatch = useAppDispatch();

  const {
    updateSuccess,
    createSuccess,
    deleteSuccess,
    categorysDepth,
    categorySlug,
  } = useAppSelector((state) => state.category);

  const { Posts, updateSuccessPost, createSuccessPost, deleteSuccessPost } =
    useAppSelector((state) => state.post);

  // update category
  const handleUpdateCategory = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const form = {
      name: nameCategory,
      id: categorySlug.id,
      slug: slugCategory,
      parent: parent,
    };

    dispatch(updateCategory(form));
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteCategory(categorySlug.id));
    navigate(-1);
  };

  // const handleParent = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   const target = event.target as HTMLTextAreaElement;
  //   var _id = target.value;

  //   setParent(target.value);
  // };

  const handleEditCategory = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const target = event.target as HTMLTextAreaElement;
    var _id = target.id;

    if (_id === "save") {
      setShowModal(true);
      setEditCategory(!editCategory);
    } else if (_id === "edit") {
      setNameCategory(categorySlug.name);
      setSlugCategory(categorySlug.slug);
      setParent(categorySlug.parent);
      setEditCategory(!editCategory);
    }
  };

  const handleCreatePost = () => {
    const form = {
      name: "name",
      slug: Math.random().toString(36).substring(2, 9),
      description: "description",
      category: categorySlug.id,
      id: "0",
    };

    dispatch(createPost(form));
  };

  useEffect(() => {
    dispatch(getPosts(String(params.slug)));
    dispatch(getCategorySlug(String(params.slug)));
  }, [
    dispatch,
    updateSuccess,
    createSuccess,
    deleteSuccess,
    updateSuccessPost,
    createSuccessPost,
    deleteSuccessPost,
    categorysDepth,
  ]);

  return (
    <>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Modal Title</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      <p> Name - {nameCategory};</p>
                      <p> Slug - {slugCategory}; </p>
                      <p> Parent - {parent}</p>
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(event) => handleUpdateCategory(event)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <div className="grid grid-cols-6 h-[calc(100%-6px)] ">
        <div className="col-span-1 rounded-lg bg-white px-2 mr-1 shadow-2xl">
          <ul
            className="sticky top-2 mt-2"
            data-hs-scrollspy="#scrollspy-2"
            data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2"
          >
            <div className="flex w-full p-1 my-1 rounded-lg shadow sm:text-lg hover:text-blue-600 hover:bg-orange-50">
              <span className="font-bold ">
                {categorySlug && categorySlug.name}
              </span>
              <div className=" flex-1 flex items-center justify-end font-light">
                <button onClick={handleEditCategory}>
                  {editCategory && editCategory ? (
                    <TfiSave
                      id={"save"}
                      className=" w-8 h-8 p-1.5 hover:bg-orange-300 rounded-lg"
                    />
                  ) : (
                    <FaRegEdit
                      id={"edit"}
                      className=" w-8 h-8 p-1.5 hover:bg-orange-300 rounded-lg"
                    />
                  )}
                </button>
                <button onClick={handleDelete}>
                  <MdDeleteOutline className=" w-8 h-8 p-1 hover:bg-orange-300 rounded-lg" />
                </button>
                <button onClick={handleCreatePost}>
                  <MdAddCircleOutline className=" w-8 h-8 p-1 hover:bg-orange-300 rounded-lg" />
                </button>
              </div>
            </div>
            <div className="w-full items-center justify-end font-light">
              {editCategory && editCategory ? (
                <form action="">
                  <>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={nameCategory || ""}
                      onChange={(e) => setNameCategory(e.target.value)}
                      className="block w-full rounded border mb-1 px-2 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                    />

                    <input
                      id="slug"
                      type="text"
                      placeholder="Slug"
                      value={slugCategory || ""}
                      onChange={(e) => setSlugCategory(e.target.value)}
                      className="block w-full rounded border mb-1 px-2 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                    />
                    <select
                      id="countries"
                      className="block w-full rounded border mb-1 px-2 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-orange-600 dark:bg-gray-800"
                      onChange={(e) => setParent(e.target.value)}
                      defaultValue=""
                    >
                      {categorys &&
                        categorys.map((category) => (
                          <option key={category.name} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      <option selected defaultValue="Choose a parent">
                        Choose a parent
                      </option>
                    </select>
                  </>
                </form>
              ) : (
                ""
              )}
            </div>
            {Posts &&
              Posts.map((post) => (
                <li key={post.id} data-hs-scrollspy-group>
                  <a
                    href={"#" + post.name}
                    className="block py-1 px-2 text-base font-normal leading-6 hover:text-orange-600 active"
                  >
                    {post.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className="col-span-5 mx-1">
          <div id="scrollspy-2" className="space-y-2 rounded-lg">
            {Posts &&
              Posts.map((post) => <PostForm key={post.id} post={post} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Scrollspy;

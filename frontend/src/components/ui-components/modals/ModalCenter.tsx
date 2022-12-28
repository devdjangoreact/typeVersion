import React, { useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { createCategory } from "../../../features/sections/categorySlite";
import {
  FormConnect,
  CategoryGet,
} from "../../../features/sections/models/Category.interface";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";

interface Props {
  title?: string;
  form?: FormConnect;
  type_obj?: string;
}

export default function ModalCenter({ title, type_obj }: Props) {
  const { showModal, setShowModal } = useStateContext();

  const [nameCategory, setNameCategory] = useState("");
  const [slugCategory, setSlugCategory] = useState("");
  const [parent, setParent] = useState("");

  const { categorys } = useAppSelector((state) => state.category);

  const dispatch = useAppDispatch();
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const form = {
      name: nameCategory,
      slug: slugCategory,
      parent: parent,
      id: "0",
    };

    dispatch(createCategory(form));
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
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
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
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
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        <option selected defaultValue=" Choose a parent">
                          Choose a parent
                        </option>
                      </select>
                    </>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(event) => handleSubmit(event)}
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
  );
}

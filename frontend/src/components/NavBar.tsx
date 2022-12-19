import { useState, useRef, useEffect } from "react";

interface ClassProps {
  class: string;
}

// Profile Dropdown
const ProfileDropDown = (props: ClassProps) => {
  const [state, setState] = useState(false);
  const profileRef = useRef<HTMLButtonElement>(null);

  const navigation = [
    { title: "Dashboard", path: "" },
    { title: "Settings", path: "" },
    { title: "Log out", path: "" },
  ];

  useEffect(() => {
    // const handleDropDown = (e) => {
    //   e.stopPropagation();
    //   if (!profileRef.current.contains(e.target)) setState(false);
    // };
    setState(false);
    // document.addEventListener("click", setState);
  }, [profileRef]);

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">Micheal John</span>
          <span className="block text-sm text-gray-500">john@gmail.com</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52
         lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? "" : "lg:hidden"}`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              key={idx}
              className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export function NavBar() {
  const navigation = [
    { title: "Favourites", path: "/favourites" },
    { title: "Careers", path: "/favourites" },
    { title: "Guides", path: "/favourites" },
    { title: "Partners", path: "/favourites" },
  ];
  return (
    <nav className="flex items-center justify-center space-x-4 px-4 mx-auto bg-blue-200 border-b rounded-lg mb-1 min-h-[55px]">
      <form className="flex items-center space-x-2 border rounded-md p-2 text-gray-900 bg-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 flex-none "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="w-full outline-none appearance-none sm:w-auto bg-blue-100"
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="flex-1 flex items-center justify-between px-4 ">
        <ul className="space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0 ">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className="text-black h-10 px-2 hover:bg-orange-300 rounded-lg py-2 "
            >
              <a className="text-center" href={item.path}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6 pl-3 ">
          <ProfileDropDown class="hidden lg:block" />
          <ProfileDropDown class="hidden lg:block" />
          <ProfileDropDown class="hidden lg:block" />
          <ProfileDropDown class="hidden lg:block" />
        </div>
      </div>
    </nav>
  );
}

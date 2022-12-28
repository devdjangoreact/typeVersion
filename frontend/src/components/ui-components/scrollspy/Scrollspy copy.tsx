import React from "react";

const Scrollspy = () => {
  return (
    <>
      <div className="grid grid-cols-6 m-2 h-[calc(100%-6px)]">
        <div className="col-span-1  p-2 border border-black rounded-lg ">
          <ul
            className="sticky top-0"
            data-hs-scrollspy="#scrollspy-2"
            data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2"
          >
            <li data-hs-scrollspy-group>
              <a
                href="#item-1"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active"
              >
                Item 1
              </a>
            </li>
            <li>
              <a
                href="#item-2"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Item 2
              </a>
            </li>
            <li data-hs-scrollspy-group>
              <a
                href="#item-3"
                className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
              >
                Item 3
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 ml-2">
          <div id="scrollspy-2" className="space-y-4 ">
            <div id="item-1" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 1</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-2" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 2</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="item-3" className=" p-2 border border-black rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scrollspy;

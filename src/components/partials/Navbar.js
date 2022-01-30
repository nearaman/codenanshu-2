import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import Search from "../shortcodes/search";

const SearchIndices = [{ name: "docsearch", title: "docsearch" }];

const Navbar = () => {
  return (
    // navigation bar
    <nav className="opacity-90 sm:px-20 px-5 sm:py-6 py-3 flex items-center justify-between bg-secBlack text-white fixed w-full z-40">
      <div className="flex space-x-6 items-center">
        <Link to="/">
          <img
            src="/logo.png"
            alt="CodeNanshu logo"
            placeholder="blurred"
            layout="fixed"
            className="h-5 w-5"
          />
        </Link>
        <ul className="md:flex space-x-7 items-center hidden md:visible">
          <li className="hover:text-red-400">
            <Link to="/blog/">Blog</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/tutorials/">tutorials</Link>
          </li>
          <li className="hover:text-green-400">
            <Link to="/notes/">Notes</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <ul className="md:flex md:space-x-7 hidden md:visible md:items-center">
          <li className="md:mx-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Search indices={SearchIndices} />
        <Menu
          as="div"
          className="relative inline-block text-left visible md:hidden"
        >
          <div>
            <Menu.Button className="visible md:hidden bg-bgBlack rounded p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-secBlack divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/blog">
                      <button
                        className={`${"text-textWhiteBlue"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Blog
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/tutorials">
                      <button
                        className={`${"text-textWhiteBlue"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        tutorials
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/notes">
                      <button
                        className={`${"text-textWhiteBlue"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Notes
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/about">
                      <button
                        className={`${"text-textWhiteBlue"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        About
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

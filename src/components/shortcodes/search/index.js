import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { Dialog } from "@headlessui/react";
import { Link } from "gatsby";
import config from "../../../../config.json";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchClient = algoliasearch(
    config.ALGOLIA_APP_ID,
    config.ALGOLIA_SEARCH_KEY
  );

  const search_client = searchClient.initIndex("docsearch");
  const requestOptions = {};

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function Query(e) {
    e.preventDefault();
    search_client.search(e.target.value, requestOptions).then(({ hits }) => {
      setSearchResults(hits);
    });
  }

  const handleKeyDown = (ev) => {
    // check keys if you want
    if (ev.keyCode === 27) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <Dialog
          as="div"
          className="fixed inset-0 z-50 bg-black rounded opacity-95"
          onClose={closeModal}
          open={true}
        >
          <div className="flex items-center pr-5">
            <input
              type="search"
              placeholder="search here"
              className="rounded px-2 py-1 text-white focus:text-black m-5 w-full bg-Black focus:bg-white transition ease-in-out"
              onChange={Query}
            />
            <button
              className="bg-Black p-1 rounded"
              onClick={closeModal}
              onKeyDown={handleKeyDown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-textWhiteBlue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div>
            <ul className="overflow-y-auto">
              {searchResults.map((res, index) => {
                return (
                  <Link to={res.slug} key={index}>
                    <li className="bg-Black mx-5 my-3 p-1 text-textWhiteBlue rounded">
                      {res.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </Dialog>
      )}

      {/* search button */}

      <button
        className="bg-Black p-1 rounded mx-2 lg:hidden"
        onClick={openModal}
      >
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <p
        className="mx-2 cursor-pointer hidden lg:flex"
        aria-hidden="true"
        onClick={openModal}
      >
        Search
      </p>
    </div>
  );
}

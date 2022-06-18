import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const NavBar = () => {
  return (
    <React.Fragment>
      <ul
        class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tabFill"
        role="tablist"
      >
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-homeFill"
            class="
            text-white
              nav-link
              w-full
              block
              font-medium
              text-sm
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent 
              focus:border-transparent
              hover:underline
              hover:font-semibold
              active"
            id="tabs-home-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeFill"
            role="tab"
            aria-controls="tabs-homeFill"
            aria-selected="true"
          >
            {" "}
            <FontAwesomeIcon className="pr-1" icon={regular("map")} />
            Home
          </a>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-profileFill"
            class="
            text-white
              nav-link
              w-full
              block
              font-medium
              text-sm
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent 
              hover:underline
              hover:font-semibold
              focus:border-transparent"
            id="tabs-profile-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileFill"
            role="tab"
            aria-controls="tabs-profileFill"
            aria-selected="false"
          >
            {" "}
            <FontAwesomeIcon className="pr-1" icon={regular("map")} />
            Home
          </a>
        </li>
        <li class="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-messagesFill"
            class="
            text-white
              nav-link
              w-full
              block
              font-medium
              text-sm
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent 
              focus:border-transparent
              hover:underline
              hover:font-semibold"
            id="tabs-messages-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesFill"
            role="tab"
            aria-controls="tabs-messagesFill"
            aria-selected="false"
          >
            {" "}
            <FontAwesomeIcon className="pr-1" icon={regular("map")} />
            Home
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavBar;

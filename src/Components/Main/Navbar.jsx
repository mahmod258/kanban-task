import React from "react";
import Button from "../Interactive-El/Button";
import { useMediaQuery } from "usehooks-ts";

const Navbar = ({ mediaQuery, sidebar, openSidebar, closeSidebar }) => {
  return (
    <nav>
      <h1
        className="h-XL"
        onClick={mediaQuery ? (sidebar ? closeSidebar : openSidebar) : null}
      >
        <svg width="24" height="25" xmlns="http://www.w3.org/2000/svg">
          <g fill="#635FC7" fillRule="evenodd">
            <rect width="6" height="25" rx="2" />
            <rect opacity=".75" x="9" width="6" height="25" rx="2" />
            <rect opacity=".5" x="18" width="6" height="25" rx="2" />
          </g>
        </svg>
        <span>Platform Launch</span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
        </svg>
      </h1>
      <div>
        <Button
          text={
            +!mediaQuery ? (
              "+ Add New Task"
            ) : (
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFF"
                  d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
                />
              </svg>
            )
          }
        />
        <div>
          <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#828FA3" fillRule="evenodd">
              <circle cx="2.308" cy="2.308" r="2.308" />
              <circle cx="2.308" cy="10" r="2.308" />
              <circle cx="2.308" cy="17.692" r="2.308" />
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

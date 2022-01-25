import React from "react";

export const ArrowUp = () => {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 12 4z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ArrowDown = () => {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12 19 6-6m-6 6-6-6m6 6V5"
      />
    </svg>
  );
};

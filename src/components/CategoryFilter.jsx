import React from "react";
import { useDispatch } from "react-redux";
import { setCatogory } from "../redux/productsSlice";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
      {/* For TSX uncomment the commented types below */}
      <button
        className="btn"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
      >
        Category
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <li>
          <a
            onClick={() => {
              dispatch(setCatogory(""));
            }}
          >
            All Products
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              dispatch(setCatogory(e.target.innerText));
            }}
          >
            men's clothing
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              dispatch(setCatogory(e.target.innerText));
            }}
          >
            jewelery
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              dispatch(setCatogory(e.target.innerText));
            }}
          >
            electronics
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              dispatch(setCatogory(e.target.innerText));
            }}
          >
            women's clothing
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;

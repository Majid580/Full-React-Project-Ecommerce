import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/productsSlice";

const InputSearchFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        className="input"
        onChange={(e) => {
          dispatch(setSearchQuery(e.target.value));
        }}
      />
    </div>
  );
};

export default InputSearchFilter;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../store/actionCreator/listAction";

export default function Home() {
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log("HEHE");
  };

  const [search, setSearch] = useState({
    searchbylist: "",
    status: "",
  });

  const changeListInput = (e) => {
    const newInput = {
      ...search,
    };
    const field = e.target.name;
    newInput[field] = e.target.value;
    setSearch(newInput);
    console.log(search, "INI");
  };

  const searchButton = (e) => {
    e.preventDefault();
    let payload = JSON.stringify({
      searchbylist: search.searchbylist,
      status: search.status,
    });
    // dispatch(searchItem(payload));
    dispatch(searchItem(search.searchbylist, search.status));
    // setSearch("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <h5>Search</h5>
      </div>
      <div className="row">
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            name="searchbylist"
            // value={search.searchbylist}
            onChange={changeListInput}
            placeholder="By Name"
            aria-label="By Name"
          />
        </div>
        <div className="col-2">
          <select
            id="status"
            name="status"
            className="form-select"
            autoComplete="department"
            onChange={changeListInput}
            // value={search.status}
          >
            <option default selected disabled>
              Select Status
            </option>
            <option value="true">DONE</option>
            <option value="false">ON GOING</option>
            <option value="all">ALL</option>
          </select>
        </div>
        <div className="col-2">
          <button
            type="submit"
            style={{ backgroundColor: "#0477bb" }}
            className="btn btn-primary"
            onClick={searchButton}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

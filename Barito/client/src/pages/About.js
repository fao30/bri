import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addListItem } from "../store/actionCreator/listAction";

export default function AddList() {
  let Navigate = useNavigate();
  const dispatch = useDispatch();

  const [addList, setAddList] = useState({
    list: "",
    description: "",
  });
  const changeListInput = (e) => {
    const newInput = {
      ...addList,
    };
    const field = e.target.name;
    newInput[field] = e.target.value;
    setAddList(newInput);
  };

  const addlistButton = (e) => {
    e.preventDefault();
    let payload = JSON.stringify({
      list: addList.list,
    });
    console.log(payload, "INI DI ABOUT");
    dispatch(addListItem(payload));
    Navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Add new list</h3>

          <form>
            <div className="mb-3">
              <label for="fullname">New List</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="list"
                placeholder="Upacara"
                value={addList.list}
                onChange={changeListInput}
              />
            </div>

            <div className="mb-3">
              <label for="profilePicture">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                id="profilePicture"
                placeholder="Hormat kepada bendera"
                value={addList.description}
                onChange={changeListInput}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={addlistButton}
            >
              Add List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

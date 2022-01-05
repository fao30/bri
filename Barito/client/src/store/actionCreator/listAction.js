import {
  GET_DATA,
  HAS_DONE_LIST,
  ITEMS_LOADING,
  SEARCH_LIST,
} from "../actionType/listTypes";

export function getData(payload) {
  return {
    type: GET_DATA,
    payload,
  };
}

export function hasDoneList(payload) {
  return {
    type: HAS_DONE_LIST,
    payload,
  };
}

function itemsLoading(payload) {
  console.log("PAYLOAD SI LOADING", payload);
  return {
    type: ITEMS_LOADING,
    payload,
  };
}

export function searchList(payload) {
  return {
    type: SEARCH_LIST,
    payload,
  };
}

export function fetchTodo() {
  return function (dispatch, getState) {
    dispatch(itemsLoading(true));
    fetch("http://localhost:3000/getlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((resp1) => {
        dispatch(getData(resp1));
        dispatch(itemsLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function hasdone(payload) {
  return function (dispatch, getState) {
    dispatch(itemsLoading(true));
    fetch(`http://localhost:3000/listdone/${payload}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((resp3) => {
        // dispatch(getListSkill(resp3));
        dispatch(hasDoneList(payload));
        dispatch(itemsLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addListItem(payload) {
  console.log(payload.list, "INI PAYLOAD ADD LSIT ITEM");
  return function (dispatch, getState) {
    dispatch(itemsLoading(true));
    fetch(`http://localhost:3000/addlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((resp3) => {
        // dispatch(getListSkill(resp3));
        console.log(resp3);
        dispatch(itemsLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function searchItem(payload, payload1) {
  console.log(payload, payload1, "INI ADALAH PAYLOAD SEARH");
  return function (dispatch, getState) {
    dispatch(itemsLoading(true));
    fetch(`http://localhost:3000/search?list=${payload}&status=${payload1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((resp3) => {
        // dispatch(getListSkill(resp3));
        console.log(resp3, "INI HASILNYA BUD");
        dispatch(searchList(resp3));
        dispatch(itemsLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

import {
  GET_DATA,
  ITEMS_LOADING,
  HAS_DONE_LIST,
  SEARCH_LIST,
} from "../actionType/listTypes";

const initialState = {
  counter: 0,
  listtodo: [],
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        listtodo: action.payload,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case HAS_DONE_LIST:
      console.log(state.listtodo, action.payload, "INI DI HASD DONE LIST");
      let tamp = state.listtodo.map((e) => {
        if (e.id === action.payload) {
          e.isDone = true;
          return e;
        }
        return e;
      });
      return {
        ...state,
        listtodo: tamp,
      };
    case SEARCH_LIST:
      return {
        ...state,
        listtodo: action.payload,
      };
      return {
        ...state,
        listtodo: tamp,
      };
    default:
      return state;
  }
}

export default reducer;

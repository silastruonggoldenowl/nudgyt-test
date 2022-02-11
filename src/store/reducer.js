import {CONTANTS} from "./contant";

const initState= {
  readmeData: null,
  listRepo: [],
  totalCountRepo: 0,
}

export default function reducer(state = initState, action) {
    switch (action.type) {
      case CONTANTS.GET_README_SUCCESS:
        return {
          ...state,
          readmeData: action.data
        }; 
      case CONTANTS.SEARCH_REPO_SUCCESS:
        return {
          ...state,
          listRepo: action.data.items,
          totalCountRepo: action.data.total_count
        }; 
      default:
        return state;
    }
}
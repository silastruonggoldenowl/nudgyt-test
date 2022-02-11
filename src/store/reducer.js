import {CONTANTS} from "./contant";

const initState= {
  readmeData: null,
  listRepo: [],
  tagetRepo: {},
  userInfo: {},
  totalCountRepo: 0,
  loading: false
}

export default function reducer(state = initState, action) {
    switch (action.type) {
      case CONTANTS.GET_README:
      case CONTANTS.SEARCH_REPO:
      case CONTANTS.GET_REPO:
      case CONTANTS.GET_USER:
        return {
          ...state,
          loading: true
        }; 
      case CONTANTS.GET_README_SUCCESS:
        return {
          ...state,
          readmeData: action.data,
          loading: false
        }; 
      case CONTANTS.SEARCH_REPO_SUCCESS:
        return {
          ...state,
          listRepo: action.data.items,
          totalCountRepo: action.data.total_count,
          loading: false
        }; 
      case CONTANTS.GET_REPO_SUCCESS:
        return {
          ...state,
          tagetRepo: action.data,
          loading: false
        };
      case CONTANTS.GET_USER_SUCCESS:
        return {
          ...state,
          userInfo: action.data,
          loading: false
        };
      default:
        return state;
    }
}
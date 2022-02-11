import {CONTANTS} from "./contant";

export const getReadme = (data) => {
    return {
      type: CONTANTS.GET_README,
      data,
    };
};

export const searchRepo = (data) => {
  return {
    type: CONTANTS.SEARCH_REPO,
    data,
  };
};
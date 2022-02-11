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

export const getRepo = (data) => {
  return {
    type: CONTANTS.GET_REPO,
    data,
  };
};

export const getUser = (data) => {
  return {
    type: CONTANTS.GET_USER,
    data,
  };
};
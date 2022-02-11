import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { CONTANTS } from '../store/contant'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getReadmeSaga(action) {
   try {
      const response = yield axios.get(`https://raw.githubusercontent.com/${action.data}/master/README.md`);
      yield put({type: CONTANTS.GET_README_SUCCESS, data: response.data});
   } catch (e) {
      yield put({type: CONTANTS.GET_README_FAIL, message: e.message});
   }
}

function* searchRepoSaga(action) {
   try {
      const response = yield axios.get(`https://api.github.com/search/repositories?q=${action.data.searchString}&page=${action.data.page}&per_page=20}`);
      yield put({type: CONTANTS.SEARCH_REPO_SUCCESS, data: response.data});
   } catch (e) {
      yield put({type: CONTANTS.SEARCH_REPO_FAIL, message: e.message});
   }
}

function* mySaga() {
  yield takeEvery(CONTANTS.GET_README, getReadmeSaga);
  yield takeEvery(CONTANTS.SEARCH_REPO, searchRepoSaga);
}


export default mySaga;

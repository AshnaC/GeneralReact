import request from 'utils/request';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  GET_FUND_LIST,
  GET_FUND_DETAILS,
} from './constants';

import { fundListFetched, fundDetailsFetched } from './actions';


function* onFetchFundList(action) {
  const requestURL = 'https://api.piggy.co.in/v2/mf/search/';
  try {
    const fundList = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(action.param),
      headers: {
        "authorization": "Token a41d2b39e3b47412504509bb5a1b66498fb1f43a",
        //"cache-control": "no-cache",
        "content-type": "application/json",
      },
    });
    yield put(fundListFetched(fundList));
  } catch (err) {
    //yield put(loadingFailed(err));
  }
}

function* onFetchFundDetails(action) {
  debugger;
  // yield files.map(file => call(uploadImageApi , file));
  const requestURL = `https://api.piggy.co.in/v1/mf/?key=${action.key}`;
  try {
    const data = yield call(request, requestURL, {
      method: 'GET',
      // body: JSON.stringify(action.param),
      headers: {
        "authorization": "Token a41d2b39e3b47412504509bb5a1b66498fb1f43a",
        //"cache-control": "no-cache",
        "content-type": "application/json",
      },
    });
    yield put(fundDetailsFetched(data, action.key));
  } catch (err) {
    //yield put(loadingFailed(err)); 
  }
}

// Individual exports for testing
export default function* rootSaga() {
  yield all([
    takeLatest(GET_FUND_LIST, onFetchFundList),
    takeLatest(GET_FUND_DETAILS, onFetchFundDetails),
  ]);
}

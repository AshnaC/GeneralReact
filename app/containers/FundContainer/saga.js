import request from 'utils/request';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  GET_FUND_LIST,
  GET_FUND_DETAILS,
  GET_FUND_DETAILS_LIST,
} from './constants';

import { fundListFetched, fundDetailsFetched } from './actions';


function* onFetchFundList(action) {
  const requestURL = 'https://api.piggy.co.in/v2/mf/search/';
  try {
    const fundList = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(action.param),
      headers: {
        authorization: 'Token a41d2b39e3b47412504509bb5a1b66498fb1f43a',
        // "cache-control": "no-cache",
        'content-type': 'application/json',
      },
    });
    yield put(fundListFetched(fundList));
  } catch (err) {
    // yield put(loadingFailed(err));
  }
}

function* onFetchFundDetails(action) {
  // yield files.map(file => call(uploadImageApi , file));
  const requestURL = `https://api.piggy.co.in/v1/mf/?key=${action.key}`;
  try {
    const data = yield call(request, requestURL, {
      method: 'GET',
      // body: JSON.stringify(action.param),
      headers: {
        authorization: 'Token a41d2b39e3b47412504509bb5a1b66498fb1f43a',
        // "cache-control": "no-cache",
        'content-type': 'application/json',
      },
    });
    yield put(fundDetailsFetched({ [action.key]: data }));
  } catch (err) {
    // yield put(loadingFailed(err));
  }
}

function* onFetchFundDetailsList(action) {
  const requestURL = 'https://api.piggy.co.in/v1/mf/?key=';
  try {
    const detailsList = yield action.detailsIds.map((id) => {
      const url = `${requestURL}${id}`;
      return call(request, url, {
        method: 'GET',
        headers: {
          authorization: 'Token a41d2b39e3b47412504509bb5a1b66498fb1f43a',
          'content-type': 'application/json',
        },
      });
    });
    const data = formatDetailsList(detailsList);
    yield put(fundDetailsFetched(data));
  } catch (err) {
    // yield put(loadingFailed(err));
  }
}

function formatDetailsList(detailsList) {
  const list = detailsList.map((detail) => {
    return ({ [detail.data.mutual_fund.details.scheme_details_id]: detail });
  });
  return Object.assign({}, ...list);
}

// Individual exports for testing

export default function* rootSaga() {
  yield all([
    takeLatest(GET_FUND_LIST, onFetchFundList),
    takeLatest(GET_FUND_DETAILS, onFetchFundDetails),
    takeLatest(GET_FUND_DETAILS_LIST, onFetchFundDetailsList),
  ]);
}

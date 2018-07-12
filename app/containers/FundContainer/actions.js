/*
 *
 * FundContainer actions
 *
 */

import {
  GET_FUND_LIST,
  FUND_LIST_FETCHED,
  GET_FUND_DETAILS,
  FUND_DETAILS_FETCHED,
  GET_FUND_DETAILS_LIST,
} from './constants';

export function getFundList(param) {
  return {
    type: GET_FUND_LIST,
    param,
  };
}

export function getFundDetails(key) {
  return {
    type: GET_FUND_DETAILS,
    key,
  };
}

export function fundListFetched(fundList) {
  return {
    type: FUND_LIST_FETCHED,
    fundList,
  };
}

export function fundDetailsFetched(details) {
  return {
    type: FUND_DETAILS_FETCHED,
    details,
  };
}

export function getFundDetailsList(detailsIds) {
  return {
    type: GET_FUND_DETAILS_LIST,
    detailsIds,
  };
}

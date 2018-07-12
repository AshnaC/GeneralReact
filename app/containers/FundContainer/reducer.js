/*
 *
 * FundContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_FUND_DETAILS,
  FUND_LIST_FETCHED,
  FUND_DETAILS_FETCHED,
  GET_FUND_LIST,
  GET_FUND_DETAILS_LIST,
} from './constants';

const initialState = fromJS({
  // fundDetailsList: {},
});

function fundContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FUND_LIST:
      return state.set('fundListFetched', false);
    case FUND_LIST_FETCHED:
      return state.set('fundList', action.fundList.data)
        .set('fundListFetched', true);
    case FUND_DETAILS_FETCHED: {
      const { details } = action;
      let fundDetailsList = state.get('fundDetailsList');
      fundDetailsList = { ...fundDetailsList, ...details };
      return state.set('fundDetailsList', fundDetailsList).set('fecthingDetails', false);
    }
    case GET_FUND_DETAILS:
    case GET_FUND_DETAILS_LIST:
      return state.set('fecthingDetails', true);
    default:
      return state;
  }
}

export default fundContainerReducer;

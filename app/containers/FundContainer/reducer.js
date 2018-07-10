/*
 *
 * FundContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FUND_LIST_FETCHED,
  FUND_DETAILS_FETCHED,
} from './constants';

const initialState = fromJS({
  // fundDetailsList: {},
});

function fundContainerReducer(state = initialState, action) {
  switch (action.type) {
    case FUND_LIST_FETCHED:
      return state.set('fundList', action.fundList.data);
    case FUND_DETAILS_FETCHED: {
      const { details, detailsId } = action;
      let fundDetailsList = state.get('fundDetailsList');
      fundDetailsList = { ...fundDetailsList, [detailsId]: details };
      return state.set('fundDetailsList', fundDetailsList);
    }
    default:
      return state;
  }
}

export default fundContainerReducer;

import { createSelector } from 'reselect';

/**
 * Direct selector to the fundContainer state domain
 */
const selectFundContainerDomain = (state) => state.get('fundContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FundContainer
 */

const makeSelectFundContainer = () => createSelector(
  selectFundContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectFundContainer;
export {
  selectFundContainerDomain,
};

import { createSelector } from 'reselect';

/**
 * Direct selector to the reservationSystem state domain
 */
const selectReservationSystemDomain = (state) => state.get('reservationSystem');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ReservationSystem
 */

const makeSelectReservationSystem = () => createSelector(
  selectReservationSystemDomain,
  (substate) => substate.toJS()
);

export default makeSelectReservationSystem;
export {
  selectReservationSystemDomain,
};

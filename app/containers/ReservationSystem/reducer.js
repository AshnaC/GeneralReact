/*
 *
 * ReservationSystem reducer
 *
 */

import { fromJS } from "immutable";
import {
  RESERVATION_LIST_LOADED,
  LOADING_FAILED,
  GET_RESERVATION_LIST,
  ADD_RESERVATION,
  ADD_RESERVATION_SUCCESS,
  RESET_BOOKED_FLAG,
} from "./constants";

const initialState = fromJS({});

function reservationSystemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESERVATION_LIST:
    case ADD_RESERVATION:
      return state.set("loading", true);
    case RESERVATION_LIST_LOADED:
      return state
        .set("reservationList", action.payload.reservationList.users)
        .set("bookedSeats", action.payload.bookedSeats)
        .set("loading", false);
    case ADD_RESERVATION_SUCCESS: {
      let reservationList = state.get("reservationList");
      reservationList = [...reservationList, action.payload];
      let bookedSeats = state.get("bookedSeats");
      bookedSeats = [...bookedSeats, ...action.payload.seats];
      return state
        .set("reservationList", reservationList)
        .set("bookedSeats", bookedSeats)
        .set("seatBooked", true)
        .set("loading", false);
    }
    case LOADING_FAILED:
      return state.set("loading", false).set("loadingFailed", true);
    case RESET_BOOKED_FLAG:
      return state.set("seatBooked", false);
    default:
      return state;
  }
}

export default reservationSystemReducer;

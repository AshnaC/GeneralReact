/*
 *
 * ReservationSystem actions
 *
 */

import {
  GET_RESERVATION_LIST,
  RESERVATION_LIST_LOADED,
  ADD_RESERVATION,
  LOADING_FAILED,
  ADD_RESERVATION_SUCCESS,
  RESET_BOOKED_FLAG,
} from "./constants";

export function getReservationList() {
  return {
    type: GET_RESERVATION_LIST,
  };
}

export function addReservation(payload) {
  return {
    type: ADD_RESERVATION,
    payload,
  };
}

export function reservationListLoaded(payload) {
  return {
    type: RESERVATION_LIST_LOADED,
    payload,
  };
}

export function reservationAdded(payload) {
  return {
    type: ADD_RESERVATION_SUCCESS,
    payload,
  };
}

export function loadingFailed(payload) {
  return {
    type: LOADING_FAILED,
    payload,
  };
}

export function resetBookedFlag() {
  return {
    type: RESET_BOOKED_FLAG,
  };
}

import { call, put, all, takeLatest } from "redux-saga/effects";
import request from "utils/request";

import { GET_RESERVATION_LIST, ADD_RESERVATION } from "./constants";
import {
  reservationListLoaded,
  loadingFailed,
  reservationAdded,
} from "./actions";

function* onFetchReservationList() {
  const requestURL = `http://localhost:5000/api/getReservationList`;
  try {
    const reservationList = yield call(request, requestURL, { method: "GET" });
    yield put(reservationListLoaded(formatReservationList(reservationList)));
  } catch (err) {
    yield put(loadingFailed(err));
  }
}

function formatReservationList(reservationList) {
  let bookedSeats = [];
  reservationList &&
    reservationList.users.map(item => {
      bookedSeats = [...bookedSeats, ...item.seats];
    });
  return { bookedSeats, reservationList };
}

function* onAddReservation(action) {
  const requestURL = "http://localhost:5000/api/addReservation";
  try {
    const userDetails = yield call(request, requestURL, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    yield put(reservationAdded(userDetails));
  } catch (err) {
    yield put(loadingFailed(err));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_RESERVATION_LIST, onFetchReservationList),
    takeLatest(ADD_RESERVATION, onAddReservation)
  ]);
}

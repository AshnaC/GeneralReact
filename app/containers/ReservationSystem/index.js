/**
 *
 * ReservationSystem
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectReservationSystem from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { getReservationList, addReservation, resetBookedFlag } from "./actions";
import SystemLayout from "../../components/SystemLayout";
import ErrorPage from "../../components/ErrorPage";

export class ReservationSystem extends React.Component {
  constructor(props) {
    super(props);
    this.addReservation = this.addReservation.bind(this);
    this.resetBookedData = this.resetBookedData.bind(this);
    this.noOfCols = 16;
    this.noOfRows = 10;
  }

  componentDidMount() {
    this.props.getReservationList();
  }

  addReservation(userDetails) {
    this.props.addReservation(userDetails);
  }

  resetBookedData() {
    this.props.resetBookedData();
  }

  render() {
    return this.props.loadingFailed ? (
      <ErrorPage />
    ) : (
      <SystemLayout
        reserveList={this.props.reservationList}
        bookedSeats={this.props.bookedSeats}
        addReservation={this.addReservation}
        enabledPreloader={this.props.loading}
        seatBooked={this.props.seatBooked}
        resetBookedData={this.resetBookedData}
        noOfCols={this.noOfCols}
        noOfRows={this.noOfRows}
      />
    );
  }
}

ReservationSystem.propTypes = {
  addReservation: PropTypes.func,
  resetBookedData: PropTypes.func,
  loadingFailed: PropTypes.bool,
  reservationList: PropTypes.array,
  bookedSeats: PropTypes.array,
  seatBooked: PropTypes.bool,
  loading: PropTypes.bool,
  getReservationList: PropTypes.func,
};

const mapStateToProps = makeSelectReservationSystem();

function mapDispatchToProps(dispatch) {
  return {
    getReservationList: () => dispatch(getReservationList()),
    addReservation: payload => dispatch(addReservation(payload)),
    resetBookedData: () => dispatch(resetBookedFlag())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "reservationSystem", reducer });
const withSaga = injectSaga({ key: "reservationSystem", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ReservationSystem);

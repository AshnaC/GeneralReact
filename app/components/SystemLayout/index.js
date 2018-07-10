/**
 *
 * SystemLayout
 *
 */

import React from "react";
import PropTypes from "prop-types";

import UserInputs from "../../components/UserInputs";
import SeatSelector from "../../components/SeatSelector";

class SystemLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onStartSelection = this.onStartSelection.bind(this);
    this.loadInitialPage = this.loadInitialPage.bind(this);
  }

  onStartSelection(userDetails) {
    this.setState(pevState => ({
      showSelector: !pevState.showSelector,
      userDetails,
    }));
  }

  getContent() {
    if (this.state.showSelector) {
      return (
        <SeatSelector
          reserveList={this.props.reserveList}
          bookedSeats={this.props.bookedSeats}
          userDetails={this.state.userDetails}
          addReservation={this.props.addReservation}
          enabledPreloader={this.props.enabledPreloader}
          seatBooked={this.props.seatBooked}
          loadInitialPage={this.loadInitialPage}
          noOfCols={this.props.noOfCols}
          noOfRows={this.props.noOfRows}
        />
      );
    }
    const seatsLeft =
      (this.props.bookedSeats &&
        (this.props.noOfCols * this.props.noOfRows) - this.props.bookedSeats.length) || 0;
    return (
      <UserInputs
        startSlection={this.onStartSelection}
        enabledPreloader={this.props.enabledPreloader}
        seatsLeft={seatsLeft}
      />
    );
  }

  loadInitialPage() {
    this.props.resetBookedData();
    this.setState({ showSelector: false, userDetails: {} });
  }

  render() {
    return this.getContent();
  }
}

SystemLayout.propTypes = {
  reserveList: PropTypes.array,
  bookedSeats: PropTypes.array,
  addReservation: PropTypes.func,
  enabledPreloader: PropTypes.bool,
  seatBooked: PropTypes.bool,
  resetBookedData: PropTypes.func,
  noOfCols: PropTypes.number,
  noOfRows: PropTypes.number,
};

export default SystemLayout;

/**
 *
 * UserInputs
 *
 */

import React from "react";
import PropTypes from "prop-types";

import {
  BackDrop,
  ContentWrapper,
  Input,
  InputWrapper,
  Label,
  Error,
  PreloaderWrapper,
} from "./styles";
import { validation } from "./constants";
import Button from "../Button";
import Preloader from "../LoadingIndicator";

class UserInputs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onStartSlection = this.onStartSlection.bind(this);
  }

  onStartSlection() {
    const error = this.validateFields();
    if (error) {
      this.setState({ error });
    } else {
      this.props.startSlection({
        customerName: this.state.customerName,
        seatsCount: parseInt(this.state.seatsCount),
      });
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  validateFields() {
    const error = {};
    let isInvalid = false;
    if (!this.state.customerName) {
      error.customerName = validation.name;
      isInvalid = true;
    }
    if (!this.state.seatsCount || isNaN(this.state.seatsCount)) {
      error.seatsCount = validation.seats.invalid;
      isInvalid = true;
    } else if (parseInt(this.state.seatsCount) > this.props.seatsLeft) {
      error.seatsCount = `${validation.seats.overflow.partOne} ${
        this.props.seatsLeft
      } 
      ${validation.seats.overflow.partTwo}`;
      isInvalid = true;
    }
    return isInvalid && error;
  }

  render() {
    const error = this.state.error;
    return (
      <BackDrop>
        <ContentWrapper>
          {this.props.enabledPreloader && (
            <PreloaderWrapper>
              <Preloader />
            </PreloaderWrapper>
          )}
          <InputWrapper>
            <Label>Name</Label>
            <Input
              type="text"
              onChange={this.handleInputChange}
              name="customerName"
              error={error && error.customerName}
              large
            />
            {error && error.customerName && <Error>{error.customerName}</Error>}
          </InputWrapper>
          <InputWrapper>
            <Label>Seats</Label>
            <Input
              type="text"
              onChange={this.handleInputChange}
              name="seatsCount"
              error={this.state.error && this.state.error.seatsCount}
              medium
            />
            {error && error.seatsCount && <Error>{error.seatsCount}</Error>}
          </InputWrapper>
          <Button
            enabled
            onClick={this.onStartSlection}
            leftMargin="50px"
            label="Start Selecting"
          />
        </ContentWrapper>
      </BackDrop>
    );
  }
}

UserInputs.propTypes = {
  enabledPreloader: PropTypes.bool,
  seatsLeft: PropTypes.number,
  startSlection: PropTypes.func,
};

export default UserInputs;

/**
 *
 * Button
 *
 */

import React from "react";
import PropTypes from "prop-types";

import { StyledButtom } from "./styles";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.onClick();
  }

  render() {
    return (
      <StyledButtom
        disabled={this.props.disabled}
        onClick={this.onButtonClick}
        leftMargin={this.props.leftMargin}
      >
        {this.props.label}
      </StyledButtom>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  leftMargin: PropTypes.string,
  label: PropTypes.string,
};

export default Button;

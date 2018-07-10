/**
*
* FundExplorer
*
*/

import React from 'react';
// import styled from 'styled-components';

import FundDetails from '../FundDetails';


class FundExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(event) {
    const value = event.target.value;
    if (value && value.length > 2) {
      this.props.getFundList({ search: value });
    }
    this.setState({ value });
  }

  getFundDetails = detailsId => () => {
    this.setState('selectedFundId', detailsId);
    if (!this.props.fundDetailsList[detailsId]) {
      this.props.getFundDetails(detailsId);
    }
  };
  render() {
    console.log('props', this.props);
    return (
      // <div>123</div>
      <div>
        <input onChange={this.onSearchInputChange}>
        </input>
        {
          this.props.fundList && this.props.fundList.search_results.map( fund => {
            return (
              <div key={fund.details_id} onClick={this.getFundDetails(fund.details_id)}>
                {fund.name}
                <FundDetails data={this.props.fundDetailsList[fund.details_id]} />
              </div>);
          })
        }
      </div>
    );
  }
}

FundExplorer.propTypes = {

};

export default FundExplorer;

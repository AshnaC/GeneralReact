/**
*
* FundList
*
*/

import React from 'react';
// import styled from 'styled-components';

import FundDetails from '../FundDetails';

class FundList extends React.PureComponent {

  getFundDetails = (detailsId) => () => {
    this.props.getFundDetails(detailsId);
  };

  addToCompare = (fund) => () => {
    this.props.addToCompare(fund);
  }

  render() {
    return (
      <div>
        {this.props.fundList.map(fund => {
            return (
              <div key={fund.details_id}>
                <div  onClick={this.getFundDetails(fund.details_id)}>
                  {fund.name}
                </div>
                <span onClick={this.addToCompare(fund)} > Add to Compare</span>
                {this.props.selectedFundId === fund.details_id && this.props.fundDetailsList[fund.details_id] &&
                <FundDetails
                  data={fund}
                />}
              </div>
            );
          })}
      </div>
    );
  }
}

FundList.propTypes = {

};

export default FundList;

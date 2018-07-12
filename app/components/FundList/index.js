/**
*
* FundList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import FundDetails from '../FundDetails';

import {
  ListWrapper,
  ListItem,
} from './styles';

class FundList extends React.PureComponent {

  getFundDetails = (detailsId) => () => {
    debugger
    this.props.getFundDetails(detailsId);
  };

  addToCompare = (fund) => () => {
    this.props.addToCompare(fund);
  }

  render() {
    return (
      <ListWrapper>
        {this.props.fundList.map((fund) => {
          return (
            <ListItem key={fund.details_id}>
              <div onClick={this.getFundDetails(fund.details_id)} role="link">
                {fund.name}
              </div>
              <span onClick={this.addToCompare(fund)} > Add to Compare</span>
              {this.props.selectedFundId === fund.details_id && this.props.fundDetailsList[fund.details_id] &&
                <FundDetails
                  data={fund}
                />}
            </ListItem>
          );
        })}
      </ListWrapper>
    );
  }
}

FundList.propTypes = {
  getFundDetails: PropTypes.func,
  addToCompare: PropTypes.func,
  fundList: PropTypes.array,
  selectedFundId: PropTypes.string,
  fundDetailsList: PropTypes.object,
};

export default FundList;

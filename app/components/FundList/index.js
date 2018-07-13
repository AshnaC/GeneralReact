/**
*
* FundList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import FundDetails from '../FundDetails';
import myImage from '../../images/addToCompare.jpg';

import {
  AddToCompareIcon,
  RatingContainer,
  ListWrapper,
  ListItem,
  FundInfo,
  FundName,
} from './styles';

class FundList extends React.PureComponent {

  getFundDetails = (detailsId) => () => {
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
              <FundInfo>
                <FundName onClick={this.getFundDetails(fund.details_id)}>
                  {fund.name}
                </FundName>
                <RatingContainer>
                  <StarRatingComponent
                    editing={false}
                    starCount={5}
                    value={fund.rating}
                  />
                </RatingContainer>
                <AddToCompareIcon
                  src={myImage}
                  onClick={this.addToCompare(fund)} />
              </FundInfo>
              {this.props.selectedFundId === fund.details_id && this.props.fundDetailsList[fund.details_id] &&
                <FundDetails
                  details={this.props.fundDetailsList[fund.details_id]}
                  fund={fund}
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

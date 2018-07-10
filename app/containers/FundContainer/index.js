/**
 *
 * FundContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFundContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getFundList, getFundDetails } from './actions';

import FundExplorer from '../../components//FundExplorer';

export class FundContainer extends React.Component {
  render() {
  console.log('main', this.props);
    return (
      <FundExplorer
        fundList={this.props.fundList}
        getFundList={this.props.getFundList}
        getFundDetails={this.props.getFundDetails}
        fundDetailsList={this.props.fundDetailsList || {}}        
      />
    );
  }
}

FundContainer.propTypes = {
  getFundList: PropTypes.func.isRequired,
  fundList: PropTypes.object,
};

// const mapStateToProps = createStructuredSelector({
//   fundcontainer: makeSelectFundContainer(),
// });

const mapStateToProps = makeSelectFundContainer();

function mapDispatchToProps(dispatch) {
  return {
    getFundList: param => dispatch(getFundList(param)),
    getFundDetails: detailsId => dispatch(getFundDetails(detailsId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'fundContainer', reducer });
const withSaga = injectSaga({ key: 'fundContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FundContainer);

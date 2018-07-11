/**
*
* FundExplorer
*
*/

import React from 'react';
// import styled from 'styled-components';
import debounce from 'lodash/debounce';

import FundDetails from '../FundDetails';


class FundExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compareList: [] };
    this.addToCompare = this.addToCompare.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.showAllResults = this.showAllResults.bind(this);
    this.searchFunds = debounce(this.onSearchInputChange, 1000);
  }

  onSearchInputChange(value) {
    this.props.getFundList({ search: value });
    this.setState({ value });
  }

  getFundDetails = detailsId => () => {
    this.setState({ selectedFundId: detailsId });
    if (!this.props.fundDetailsList[detailsId]) {
      this.props.getFundDetails(detailsId);
    }
  };

  handleSearch(event) {
    const value = event.target.value;
    if (value && value.length > 2 && value !== this.state.value) {
      this.searchFunds(value);
    }
  }

  showAllResults() {
    this.setState({ showAllResults: true });
  }

  addToCompare(detailsId) {
    debugger
    this.setState((prevState) => {
      const compareList = prevState.compareList;
      if (!compareList.includes(detailsId)) {
        compareList.push(detailsId);
      }
    }
    );
  }

  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    const fundList = (this.props.fundList && this.props.fundList.search_results) || [];
    return (
      // <div>123</div>
      <div>
        <input onKeyUp={this.handleSearch}>
        </input>
        <div onClick={this.showAllResults}>Search</div>
        {fundList.length === 0 && this.props.fundList ?
          <div>No matching results</div> :
          <div>
            {fundList.slice(0, 9).map(fund => {
              return (
                <div key={fund.details_id} onClick={this.getFundDetails(fund.details_id)}>
                  {fund.name}
                </div>);
            })}
            {fundList.length > 10 && <div onClick={this.showAllResults}>Show More</div>}
          </div>
        }
        {this.state.showAllResults && this.props.fundList.search_query === this.state.value &&
          fundList.map(fund => {
            return (
              <div>
                <div key={fund.details_id} onClick={this.getFundDetails(fund.details_id)}>
                  {fund.name}
                </div>
                <span onClick={this.addToCompare.bind(this, fund.details_id)} > Add to Compare</span>
              </div>
            );
          })
        }

        {this.props.fundDetailsList[this.state.selectedFundId] &&
          <FundDetails data={this.props.fundDetailsList[this.state.selectedFundId]} />}
      </div>
    );
  }
}

FundExplorer.propTypes = {

};

export default FundExplorer;

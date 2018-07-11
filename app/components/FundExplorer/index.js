/**
*
* FundExplorer
*
*/

import React from 'react';
// import styled from 'styled-components';
import debounce from 'lodash/debounce';

import FundDetails from '../FundDetails';
import FundList from '../FundList';
import Button from '../Button';

import {
  CompareListWrapper,
  CompareItem,
  Input,
} from './styles';

class FundExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compareList: [] };
    this.addToCompare = this.addToCompare.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // this.showAllResults = this.showAllResults.bind(this);
    this.searchFunds = debounce(this.onSearchInputChange, 1000);
    //this.getFundDetails = this.props.getFundDetails.bind(this);
  }

  onSearchInputChange(value) {
    this.props.getFundList({ search: value });
    this.setState({ value, showResult: false });
  }

  // getFundDetails(detailsId) {
  //   this.setState({ selectedFundId: detailsId });
  //   this.props.getFundDetails(detailsId);
  // }

  getFundDetails = (detailsId) => () => {
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

  showResults = (detailsId) => () => {
    const displayList = this.props.fundList && (detailsId ?
      this.props.fundList.search_results.filter(fund=> fund.details_id === detailsId) :
      this.props.fundList.search_results);
    this.setState({ showResult: true, displayList });
  }

  // showAllResults() {
  //   const displayList = this.props.fundList && this.props.fundList.search_results;
  //   this.setState({ showResult: true, displayList });
  // }

  addToCompare(fund) {
    this.setState((prevState) => {
      const compareList = prevState.compareList;
      if (!compareList.find((item) => item.details_id === fund.details_id)) {
        compareList.push(fund);
      }
    });
  }

  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    const funds = (this.props.fundList && this.props.fundList.search_results) || [];
    return (
      <div>
        <Input large onKeyUp={this.handleSearch} />
        <Button onClick={this.showResults()} label={'Search'} />
        {funds.length === 0 && this.props.fundList ?
          <div>No matching results</div> :
          <div>
            {funds.slice(0, 9).map(fund => {
              return (
                <div key={fund.details_id} onClick={this.showResults(fund.details_id, true)}>
                  {fund.name}
                </div>);
            })}
            {funds.length > 10 && <div onClick={this.showResults()}>Show More</div>}
          </div>
        }
        {this.state.compareList.length > 0 &&
        <CompareListWrapper>
          {this.state.compareList.map(fundToCompare => {
          return (<CompareItem key={fundToCompare.details_id}>{fundToCompare.name}</CompareItem>);
        })}
          <Button
            label="Compare"
            disabled={this.state.compareList.length < 2}
          />
        </CompareListWrapper>}

        {this.state.showResult &&
        <FundList
          fundList={this.state.displayList}
          selectedFundId={this.state.selectedFundId}
          addToCompare={this.addToCompare}
          getFundDetails={this.getFundDetails}
          fundDetailsList={this.props.fundDetailsList}
        />
        }
      </div>
    );
  }
}

FundExplorer.propTypes = {

};

export default FundExplorer;

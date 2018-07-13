/**
*
* FundCompare
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  CompareListWrapper,
  StyledTable,
  TableBody,
  TableHeader,
  TableRow,
  TableCol,
  BackLink,
} from './styles';


class FundCompare extends React.PureComponent {
  render() {
    return (
      <CompareListWrapper>
        <BackLink onClick={() => this.props.onBack()}>
          {'< Back'}
        </BackLink>
        <StyledTable>
          <TableBody>
            <TableHeader>
              <TableCol>Fund Name</TableCol>
              <TableCol>AMC</TableCol>
              <TableCol>Fund Class</TableCol>
              <TableCol>Fund Type</TableCol>
              <TableCol>Divident Type</TableCol>
              <TableCol>Risk</TableCol>
              <TableCol>NAV</TableCol>
              <TableCol>AUM</TableCol>
              <TableCol>Benchmark</TableCol>
              <TableCol>Min. Subscription</TableCol>
              <TableCol>1 year return</TableCol>
              <TableCol>3 year return</TableCol>
              <TableCol>5 year return</TableCol>
            </TableHeader>
            {
              this.props.compareList.map(item => {
                const fund = this.props.fundDetailsList[item.details_id];
                const details = fund.data.mutual_fund.details;
                return (
                  <TableRow key={item.details_id}>
                    <TableCol>{details.name}</TableCol>
                    <TableCol>{details.amc.name}</TableCol>
                    <TableCol>{details.category}</TableCol>
                    <TableCol>{details.scheme_type}</TableCol>
                    <TableCol>{fund.data.mutual_fund.dividend_type_text}</TableCol>
                    <TableCol>{details.riskometer}</TableCol>
                    <TableCol>{fund.data.mutual_fund.nav}</TableCol>
                    <TableCol>{details.asset_aum}</TableCol>
                    <TableCol>{details.benchmark_text}</TableCol>
                    <TableCol>{details.minimum_subscription}</TableCol>
                    <TableCol>{details.yoy_return}</TableCol>
                    <TableCol>{details.return_3yr}</TableCol>
                    <TableCol>{details.return_5yr}</TableCol>
                  </TableRow>);
              })
            }
          </TableBody>
        </StyledTable>
      </CompareListWrapper>
    );
  }
}

FundCompare.propTypes = {
  onBack: PropTypes.func,
  compareList: PropTypes.array,
  fundDetailsList: PropTypes.object,
};

export default FundCompare;

import React from "react";
import PropTypes from "prop-types";

import {
  StyledTable,
  TableHeader,
  TableHeaderCol,
  TableRow,
  TableColoumn,
} from "./styles";

function CustomerList(props) {
  return (
    <StyledTable>
      <TableHeader>
        <TableHeaderCol>Name</TableHeaderCol>
        <TableHeaderCol>No of seats</TableHeaderCol>
        <TableHeaderCol>Seats</TableHeaderCol>
      </TableHeader>
      {props.reserveList.map((item, i) => {
        return (
          <TableRow key={i}>
            <TableColoumn>{item.name}</TableColoumn>
            <TableColoumn>{item.seats.length}</TableColoumn>
            <TableColoumn>{item.seats.join(",")}</TableColoumn>
          </TableRow>
        );
      })}
    </StyledTable>
  );
}

CustomerList.propTypes = {
  reserveList: PropTypes.array,
};

export default CustomerList;

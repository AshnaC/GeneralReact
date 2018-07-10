import styled from "styled-components";

export const StyledTable = styled.div`
  width: 600px;
  margin: auto;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.07);
  margin-bottom: 50px;
`;

export const TableHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
`;

export const TableHeaderCol = styled.div`
  display: inline-block;
  width: 35%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:nth-child(2) {
    width: 30%;
  }
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding: 10px;
`;
export const TableRow = styled.div`
  width: 100%;
  background-color: #ffffff;
  &:nth-child(odd) {
    background-color: #f1f1f1;
  }
  background-color: #ffffff;
`;

export const TableColoumn = styled.div`
  display: inline-block;
  width: 35%;
  &:nth-child(2) {
    width: 30%;
  }
  font-size: 14px;
  text-align: center;
  padding: 10px;
`;

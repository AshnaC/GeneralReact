import styled from 'styled-components';
import myImage from '../../images/background.jpg';

export const CompareListWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  min-height: 100%;
  z-index: 3;
  background: #FFF;
  padding:10px;
`;

export const StyledTable = styled.table`
  text-align : center;
  font-size: 13px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #eff2f4;
  width: 100%;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #eff2f4;
  }
  background-color: #ffffff;
  color: #666;
`;

export const TableCol = styled.td`
  padding: 10px 5px;
`;

export const TableHeader = styled.tr`
    font-weight: bold;
    background-color: #0066a8;
    color: #FFF;
`;


export const BackLink = styled.div`
  font-size: 14px;
  color: #0066a8;
  padding: 10px;
  cursor: pointer;
   &:hover {
    font-weight: bold;
  }
`;

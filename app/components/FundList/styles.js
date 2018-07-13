import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding:10px;
  // background: #e8f1f7;
  // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const ListItem = styled.div`
  padding: 5px;
  border: 1px solid #c8c8c8;
  margin: 10px 0;
  background: azure;
`;

export const FundInfo = styled.div``;

export const FundName = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 60%;
  display : inline-block;
  text-decoration: underline;
  color: #106fb1;
  cursor: pointer;
`;

export const AddToCompareIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  top: -4px;
`;

export const RatingContainer = styled.div`
  display : inline-block;
  width: calc(40% - 40px);
  position: relative;
  top: 5px;
`;
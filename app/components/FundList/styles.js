import styled from 'styled-components';

export const ListWrapper = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 2px solid #c8c8c8;
  padding:10px;
  // border-radius: 6px;
  vertical-align: top;
  width: calc(100% - 300px);
  display: inline-block;
`;

export const ListItem = styled.div`
  padding: 5px;
  border: 1px solid #c8c8c8;
  font-size: 14px;
  color: ##666;
  font-weight: bold;
`;

export const Input = styled.input`
  height: 40px;
  width: ${(props) =>
    (props.large && '300px') ||
    (props.medium && '150px') ||
    (props.small && '75px')};
  border: ${(props) => (props.error ? '2px solid #F0E68C' : '1px solid #106fb1')};
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 800px;
  margin: auto;
`;

export const NoData = styled.div`
  width: 300px;
  color: #747474;
  font-size: 14px;
  text-align:center;
  padding:10px;
  border: 1px solid #c8c8c8;
`;

export const SearchResultDropDown = styled.div`
  position: absolute;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #c8c8c8;
  padding: 10px;
  font-size :14px;
  font-weight: bold;
  color : #666;
  background-color: #F5F5F5;
  z-index: 2;
`;

export const ShowMore = styled.div`
  color: #106fb1;
  font-size :12px;
  font-weight: bold;
  padding: 5px;
  background-color: rgba(250, 250, 250, 0.85);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-align:  center;
  margin: 10px;
`;

export const SearchItem = styled.div`
  padding: 5px 10px;
`;

export const BackDrop = styled.div`
  position: fixed;
  background-color:transparent;
  width: 100%;
  height: 100%;
  left : 0;
  top : 0;
  z-index: -1;
`;

import styled from 'styled-components';
import myImage from '../../images/background.jpg';

export const CompareListWrapper = styled.div`
  display: inline-block;
  width: 300px;
  padding:10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 2px solid #c8c8c8;
  min-height: calc(100vh - 20px);
`;

export const CompareItem = styled.div`
  padding: 5px;
  margin: 5px;
  border: 1px solid #c8c8c8;
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
  width: 470px;
  margin: auto;
  text-align: center;
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

export const ContentContainer = styled.div`
  padding:10px;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 300px);
  vertical-align: top;
  display: inline-block;
`;

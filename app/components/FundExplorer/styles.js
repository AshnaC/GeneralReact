import styled from "styled-components";
import myImage from "../../images/background.jpg";

export const CompareListWrapper = styled.div `
  width:500px;
  border: 2px solid #c8c8c8;
  padding:10px;
`;

export const CompareItem = styled.div `
  padding: 5px;
  margin: 5px;
  border: 1px solid #c8c8c8;
`;

export const Input = styled.input`
  height: 40px;
  width: ${props =>
    (props.large && "300px") ||
    (props.medium && "150px") ||
    (props.small && "75px")};
  border: ${props => (props.error ? "2px solid #F0E68C" : "1px solid #106fb1")};
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
`;

export const Theater = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  background-image: url(${myImage});
`;

export const ContentWrapper = styled.div`
  width: 800px;
  margin: auto;
`;

export const Seat = styled.div`
  height: 25px;
  width: 25px;
  margin: 10px;
  background: ${props =>
    (props.reserved && "#FF0000") ||
    (props.selected && "#32CD32") ||
    "#FFFFFF"};
  cursor: ${props => (props.selectable ? "pointer" : "default")};
  margin-right: ${props => (props.index === 5 ? "50px" : "auto")};
  border: 2px solid #c8c8c8;
`;

export const Screen = styled.div`
  height: 30px;
  width: 700px;
  background-color: #106fb1;
  margin-bottom: 50px;
  margin: auto;
`;

export const SeatLayout = styled.div`
  width: 700px;
  margin: auto;
  margin-top: 30px;
  position: relative;
  padding-bottom: 50px;
`;
export const SeatRow = styled.div`
  text-align: center;
`;

export const RowNumber = styled.div`
  left: -10px;
  position: absolute;
  top: 10px;
  font-size: 14px;
  font-weight: bold;
  line-height: 25px;
`;

export const ColNumber = styled.div`
  position: absolute;
  top: -15px;
  width: 25px;
  left: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const SeatWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const PreloaderWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 33%;
`;

import styled from "styled-components";
import myImage from "../../images/background.jpg";

export const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  min-width: 800px;
  position: fixed;
  left: 0;
  right: 0;
  background-image: url(${myImage});
  background-size: 100% 100%;
`;

export const Input = styled.input`
  height: 40px;
  width: ${props =>
    (props.large && "300px") ||
    (props.medium && "150px") ||
    (props.small && "75px")};
  border: ${props => (props.error ? "2px solid #F0E68C" : "1px solid #FFFFFF")};
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
`;

export const ContentWrapper = styled.div`
  width: 500px;
  margin: auto;
  position: relative;
  top: 30%;
`;

export const InputWrapper = styled.div`
  padding-bottom: 20px;
`;

export const Label = styled.div`
  width: 50px;
  color: #ffffff;
  font-size: 14px;
  display: inline-block;
  line-height: 40px;
  font-weight: bold;
`;

export const Error = styled.div`
  color: #F0E68C;
  padding: 5px;
  font-size: 13px;
  display: inline-block;
  line-height: 30px;
  font-weight: bold;
`;

export const PreloaderWrapper = styled.div`
  position: absolute;
  top: 28px;
  left: 150px;
`;

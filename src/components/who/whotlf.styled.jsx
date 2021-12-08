import Styled from "styled-components";
export const Div = Styled.div`
    max-height: 308px;
    height: ${(props) => props.height + "px"};
    padding: 0 30px;
  width: 280px;
  overflow: hidden;
  p {
      margin: 0;
      font-family: "Open Sans";
      font-size: 12px;
      line-height: 30px;
    }
`;

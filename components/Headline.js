import styled from "styled-components";

const WigHeaderBlock = styled.div`
  h1 {
    text-align: center;
    font-family: "KBO-Dia-Gothic_bold", serif;
    font-weight: 700;
    line-height: 1.2;
    margin: 30px;
    letter-spacing: 10px;
  }
`;

function WigHeader({ color, fontSize }) {
  return (
    <WigHeaderBlock style={{ color, fontSize }}>
      <h1>WIG</h1>
    </WigHeaderBlock>
  );
}
WigHeader.defaultProps = {
  color: "black",
  fontSize: "40px",
};

export default WigHeader;

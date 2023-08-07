import styled from "styled-components";
import { RxDividerVertical } from "react-icons/rx";
import Link from "next/link";

const FindBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const ABlock = styled(Link)`
  color: black;
  font-size: 0.9rem;
  text-decoration: none;
`;

function WigFind() {
  return (
    <FindBlock>
      <ABlock href="/findid">아이디 찾기</ABlock>
      <RxDividerVertical style={{ marginTop: "3px" }} />
      <ABlock href="/findpwd">비밀번호 찾기</ABlock>
      <RxDividerVertical style={{ marginTop: "3px" }} />
      <ABlock href="/agree">회원가입</ABlock>
    </FindBlock>
  );
}

export default WigFind;

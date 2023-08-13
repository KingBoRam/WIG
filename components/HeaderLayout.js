import Modal from "../components/Modal";
import WigTemplate from "../components/Login";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LayoutBlock = styled.div`
  background: #1971c2;
  margin: 0px;
  padding: 16px;
  padding-left: 10rem;
  padding-right: 10rem;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.header`
  font-size: 30px;
  color: white;
  font-family: "KBO-Dia-Gothic_bold", serif;
  letter-spacing: 3px;
`;
const TextBox = styled.div`
  color: white;
  font-size: 0.8rem;
`;
export default function HeaderLayout({ children }) {
  const [sessionLoginState, sessionSetLoginState] = useState("");
  const [localLoginState, localSetLoginState] = useState("");
  useEffect(() => {
    const storedsessionLoginState = sessionStorage.getItem("jwtToken");
    sessionSetLoginState(storedsessionLoginState);
    const storedlocaleLoginState = localStorage.getItem("jwtToken");
    localSetLoginState(storedlocaleLoginState);
  }, []);
  if (
    sessionLoginState !== "your_jwt_token" &&
    localLoginState !== "your_jwt_token"
  ) {
    return (
      <>
        <LayoutBlock>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Header>WIG</Header>
            <TextBox
              style={{
                marginLeft: "10px",
                fontFamily: "iceJaram-Rg",
                fontSize: "1.5rem",
              }}
            >
              맑은 하루 보내세요 ^__^
              <div
                style={{
                  color: "red",
                  display: "inline-block",
                  marginLeft: "5px",
                }}
              >
                *
              </div>
            </TextBox>
          </div>
          <Modal name="로그인">
            <WigTemplate></WigTemplate>
          </Modal>
        </LayoutBlock>
        {children}
      </>
    );
  } else if (
    sessionLoginState === "your_jwt_token" ||
    localLoginState === "your_jwt_token"
  ) {
    return (
      <>
        <LayoutBlock>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Header>WIG</Header>
            <TextBox
              style={{
                marginLeft: "10px",
                fontFamily: "iceJaram-Rg",
                fontSize: "1.5rem",
              }}
            >
              상쾌한 하루 보내세요 ^__^
              <div
                style={{
                  color: "red",
                  display: "inline-block",
                  marginLeft: "5px",
                }}
              >
                *
              </div>
            </TextBox>
          </div>
          <Link
            href="/mypage"
            style={{ textDecoration: "underline", color: "white" }}
          >
            마이페이지
          </Link>
        </LayoutBlock>
        {children}
      </>
    );
  }
}

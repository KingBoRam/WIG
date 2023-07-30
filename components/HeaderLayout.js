import Modal from "../components/Modal";
import WigTemplate from "../components/Login";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderLayout({ children }) {
  const [loginState, setLoginState] = useState("");
  useEffect(() => {
    const storedLoginState = sessionStorage.getItem("jwtToken");
    setLoginState(storedLoginState);
  }, []);
  if (loginState !== "your_jwt_token") {
    return (
      <>
        <div
          style={{
            background: "#1971c2",
            margin: "0px",
            padding: "16px",
            fontSize: "24px",
            color: "white",
            fontFamily: "KBO-Dia-Gothic_bold",
            fontWeight: "700",
            letterSpacing: "0.2rem",
          }}
        >
          <header>WIG</header>
          <Modal name="로그인">
            <WigTemplate></WigTemplate>
          </Modal>
        </div>
        {children}
      </>
    );
  } else if (loginState === "your_jwt_token") {
    return (
      <>
        <div
          style={{
            background: "#1971c2",
            margin: "0px",
            padding: "16px",
            fontSize: "24px",
            color: "white",
            fontFamily: "KBO-Dia-Gothic_bold",
            fontWeight: "700",
            letterSpacing: "0.2rem",
          }}
        >
          <header>WIG</header>
          <Link href="/mypage">마이페이지</Link>
        </div>
        {children}
      </>
    );
  }
}

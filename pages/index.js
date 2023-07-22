import Head from "next/head";
import Modal from "../components/Modal";
import WigTemplate from "../components/Login";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loginState, setLoginState] = useState("");
  useEffect(() => {
    const storedLoginState = sessionStorage.getItem("jwtToken");
    setLoginState(storedLoginState);
  }, []);
  if (loginState !== "your_jwt_token") {
    return (
      <>
        <Head>
          <title>TEST Is Good</title>
          <meta name="hehe" content="hehe" />
        </Head>
        <div>basic</div>
        <Modal name="로그인">
          <WigTemplate></WigTemplate>
        </Modal>
      </>
    );
  } else if (loginState === "your_jwt_token") {
    return (
      <>
        <Head>
          <title>Whether Is Good</title>
          <meta name="hehe" content="hehe" />
        </Head>
        <div>basic</div>
        <Link href="/mypage">마이페이지</Link>
      </>
    );
  }
}

import Head from "next/head";
import Modal from "../components/Modal";
import WigTemplate from "../components/Login";
import Link from "next/link";

export default function Home() {
  const loginState = false;
  if (loginState === false) {
    return (
      <>
        <Head>
          <title>Whether Is Good</title>
          <meta name="hehe" content="hehe" />
        </Head>
        <div>basic</div>
        <Modal name="로그인">
          <WigTemplate></WigTemplate>
        </Modal>
      </>
    );
  } else if (loginState === true) {
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

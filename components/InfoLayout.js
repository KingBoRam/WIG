import Head from "next/head";

export default function InfoLayout({ children }) {
  return (
    <>
      <Head>
        <title>Whether Is Good</title>
        <meta name="hehe" content="hehe" />
      </Head>
      {children}
    </>
  );
}
// 나중에 여기 nav footer등도 넣음녀 될듯..?

import Head from "next/head";

export default function BaseLayout({ children }) {
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

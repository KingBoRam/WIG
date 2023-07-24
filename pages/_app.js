import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import InfoLayout from "../components/InfoLayout";
import HeaderLayout from "../components/HeaderLayout";

function MyApp({ Component, pageProps }) {
  const isSpecialPage = pageProps.isSpecialPage || false;
  return (
    <RecoilRoot>
      {isSpecialPage ? (
        <InfoLayout>
          <Component {...pageProps} />
        </InfoLayout>
      ) : (
        <InfoLayout>
          <HeaderLayout>
            <Component {...pageProps} />
          </HeaderLayout>
        </InfoLayout>
      )}
    </RecoilRoot>
  );
}

export default MyApp;

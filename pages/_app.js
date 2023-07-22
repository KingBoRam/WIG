import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import BaseLayout from "../components/baselayout";
import MainLayout from "../components/mainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <BaseLayout>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </BaseLayout>
    </RecoilRoot>
  );
}

export default MyApp;

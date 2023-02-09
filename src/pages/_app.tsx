import { AppProps } from "next/app";
import "../styles/index.css";
import Header from "../components/header";
import { store } from "../app/store";
import { Provider } from "react-redux";
import Footer from "@/components/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen relative inset-0  ">
        {/* <nav className='sticky top-0 inset-x-0 bg-black text-white'>helo</nav> */}
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Provider>
      </div>
    </>
  );
}

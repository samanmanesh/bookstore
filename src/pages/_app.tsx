import { AppProps } from "next/app";
import "../styles/index.css";
import Header from "../components/header";
import { store } from "../app/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen relative  ">
        {/* <nav className='sticky top-0 inset-x-0 bg-black text-white'>helo</nav> */}
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </div>
    </>
  );
}

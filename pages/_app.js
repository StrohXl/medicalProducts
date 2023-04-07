import "../styles/global.scss";
import "antd/dist/reset.css";
import { useRouter } from "next/router";
import LayoutAdmin from "<negocio>/components/layouts/layoutAdmin";
import LayoutClient from "<negocio>/components/layouts/layout";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.asPath == "/login" || router.asPath == "/registerUser" ? (
        <Component {...pageProps} />
      ) : router.asPath.includes("admin") ? (
        <LayoutAdmin Component={Component} pageProps={pageProps} />
      ) : (
        <LayoutClient Component={Component} pageProps={pageProps} />
      )}
    </>
  );
}

import "../styles/global.scss";
import "antd/dist/reset.css";
import { useRouter } from "next/router";
import LayoutAdmin from "<negocio>/components/admin/layoutAdmin";
import LayoutClient from "<negocio>/components/client/layout";
import { Provider } from "react-redux";
import { store } from "<negocio>/src/app/store";
import '../components/admin/axiosConfig'
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
     <Provider store={store} >
       {router.asPath == "/login" || router.asPath == "/registerUser" ? (
         <Component {...pageProps} />
       ) : router.asPath.includes("admin") ? (
      
           <LayoutAdmin Component={Component} pageProps={pageProps} />
      
       ) : (
         <LayoutClient Component={Component} pageProps={pageProps} />
       )}
     </Provider>
    </>
  );
}

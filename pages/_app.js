import "../styles/global.scss";
import { Layout } from "antd";
import "antd/dist/reset.css";
import Nav from "<negocio>/components/nav";
import { useRouter } from "next/router";
const { Header, Content, Footer } = Layout;
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
<>
        {
          router.asPath == '/login'?
          <Component {...pageProps} />
          :
        <Layout>
          <header>
            <Nav />
          </header>
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer>footer</Footer>
        </Layout>
        }
   
  
</>
  );
}

import "../styles/global.scss";
import { Layout, ConfigProvider } from "antd";
import "antd/dist/reset.css";
import Nav from "<negocio>/components/nav/nav";
import { useRouter } from "next/router";
const { Header, Content, Footer } = Layout;
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.asPath == "/login" || router.asPath == "/registerUser" ? (
        <Component {...pageProps} />
      ) : (
        <ConfigProvider
        theme={{
          token:{
            colorPrimary: '#1890ff',
            colorSecondary: '#ad4bcd',
          }
        }}
        >
          <Layout>
            <header>
              <Nav />
            </header>
            <Content className="main">
              <Component {...pageProps} />
            </Content>
            <Footer style={{ background: "#fff", height: "300px" }}>
              footer
            </Footer>
          </Layout>
        </ConfigProvider>
      )}
    </>
  );
}

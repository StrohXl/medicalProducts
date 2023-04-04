import "../styles/global.scss";
import { Layout, ConfigProvider } from "antd";
import "antd/dist/reset.css";
import Nav from "<negocio>/components/nav/nav";
import Foter from "<negocio>/components/footer";
import { useRouter } from "next/router";
const { Header, Content, Footer } = Layout;
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const colorPrimary = '#1890ff'
  const colorSecondary = '#ad4bcd'
  return (
    <>
      {router.asPath == "/login" || router.asPath == "/registerUser" ? (
        <Component {...pageProps} />
      ) : (
        <ConfigProvider
        theme={{
          token:{
            colorPrimary: '#1472c9',
            colorSecondary: '#ad4bcd',
          },
          components:{
            Layout:{
              colorBgBody:'#ebebeb'
            }

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
            <Footer style={{ background: "#fff",}}>
              <Foter/>
            </Footer>
          </Layout>
        </ConfigProvider>
      )}
    </>
  );
}

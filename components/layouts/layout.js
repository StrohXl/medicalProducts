import { Layout, ConfigProvider, theme } from "antd";
import Nav from "../nav/nav";
import Foter from '../footer'
const { Content, Footer } = Layout;
const LayoutClient=({Component, pageProps})=>{
    return(
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1472c9",
            colorSecondary: "#ad4bcd",
          },
          components: {
            Layout: {
              colorBgBody: "#ebebeb",
            },
          },
        }}
      >
        <Layout>
          <header>
            <Nav />
          </header>
          <Content className="main">
            <Component {...pageProps} />
          </Content>
          <Footer style={{ background: "#fff" }}>
            <Foter />
          </Footer>
        </Layout>
      </ConfigProvider>
    )
}
export default LayoutClient
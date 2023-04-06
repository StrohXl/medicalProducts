import { Layout, theme } from "antd";
import NavAdmin from "<negocio>/components/nav/navAdmin";
import MenuSiderAdmin from "../nav/menuSiderAdmin";
const { Header, Content, Sider } = Layout;
const LayoutAdmin=({Component, pageProps})=>{
  const {token} = theme.useToken()
    return(
        <Layout>
        <Header>
          <NavAdmin />
        </Header>
        <Layout>
          <Sider
            style={{
              background: token.colorBgContainer,
            }}
            width={200}
          >
           <MenuSiderAdmin/>
          </Sider>
          <Content
            style={{
              padding: 24,
              margin: 24,
              minHeight: 280,
              background: token.colorBgContainer,
            }}
          >
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    )
}
export default LayoutAdmin
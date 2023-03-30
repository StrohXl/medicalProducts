import '../styles/global.scss'
import { Layout } from 'antd'
import 'antd/dist/reset.css';
import Nav from '<negocio>/components/nav';
const {Header, Content, Footer} = Layout
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <header>
        <Nav/>
      </header>
      <Content>
      <Component {...pageProps} />
      </Content>
      <Footer>
        footer
      </Footer>
    </Layout>
  )

}

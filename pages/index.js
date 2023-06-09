import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "../components/carousel";
import ListCard2 from "<negocio>/components/listCards/listCards2";
import Contact from "<negocio>/components/contact";
import {items} from '../components/listCards/itemsCards2'
import { Typography, theme } from "antd";
const { Title } = Typography;
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { token } = theme.useToken();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Carousel />
        <ListCard2 data={items} />
        <Contact />
      </>
    </>
  );
}

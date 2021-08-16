import Head from "next/head";
import { Banner, Header } from "../components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>PearBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
}

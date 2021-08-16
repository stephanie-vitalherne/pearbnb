import Head from "next/head";
import { Header } from "../components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>PearBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  );
}

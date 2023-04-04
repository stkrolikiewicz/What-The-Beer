import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Error from "@/components/Error/Error";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Internal Server Error</title>
        <meta name="description" content="500 Error" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout error>
        <Error>Failed to load!</Error>
      </Layout>
    </>
  );
}

export default HomePage
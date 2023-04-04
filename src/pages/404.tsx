import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Error from "@/components/Error/Error";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="404 Error" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout error>
        <Error>Page not found!</Error>
      </Layout>
    </>
  );
}

export default HomePage
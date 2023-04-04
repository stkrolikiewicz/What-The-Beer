import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Main } from "@/views";
import useBeers from "@/hooks/useBeers";
import { NextPage } from "next";
import Loader from "@/components/Loader/Loader";
import PageCounter, { perPage } from "@/features/pageCounter/pageCounter";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Error from "@/components/Error/Error";

const HomePage: NextPage = () => {
  const pageIndex = useSelector((state: RootState) => state.counter.value)
  const { data, isLoading, isValidating, error } = useBeers(pageIndex, perPage)
  return (
    <>
      <Head>
        <title>What the Beer</title>
        <meta name="description" content="Beer library app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        {error &&
          <>
            <PageCounter />
            <Error>Failed to load... 😒</Error>
          </>
        }
        {(isLoading || isValidating || !data && !error) && <Loader />}
        {
          data && data[0] &&
          <>
            <PageCounter />
            <Main items={data} />
            <PageCounter />
          </>
        }
      </Layout>
    </>
  );
}

export default HomePage
import DetailedInfoCard from '@/components/DetailedInfoCard/DetailedInfoCard'
import Layout from '@/components/Layout/Layout'
import Loader from '@/components/Loader/Loader'
import useSingleBeer from '@/hooks/useSingleBeer'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from "next/head";

const BeerPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isValidating, error } = useSingleBeer(id)

  if (data && !data[0] && !isLoading && !isValidating && !error) router.push('/404')
  return (
    <>
      <Head>
        <title>{data && data[0] && data[0].name || "Details"}</title>
        <meta name="description" content="Beer details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {error && <div>failed to load</div>}
        {(isLoading || isValidating || !data) && <Loader />}
        {data && data[0] && <DetailedInfoCard item={data[0]} />}
      </Layout>
    </>
  )

}

export default BeerPage
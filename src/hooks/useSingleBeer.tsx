import useSWR from "swr"
import { fetcher } from '@/lib/swr'
import { Beer } from "@/models"


const useSingleBeer = (id: string | string[] | undefined) => {

  const swr = useSWR(id ? `https://api.punkapi.com/v2/beers/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    data: swr.data as Beer[],
    isLoading: swr.isLoading,
    isValidating: swr.isValidating,
    error: swr.error
  }
}

export default useSingleBeer
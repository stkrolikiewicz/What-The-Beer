import useSWR from "swr"
import { fetcher } from '@/lib/swr'
import { Beer } from "@/models"


const useBeers = (page: number, per_page: number) => {

  const swr = useSWR<Beer[]>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`, fetcher, {
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

export default useBeers
import axios from 'axios'
import useSWR from 'swr'
interface DataPaylaod<T> {
  [key: string]: T
}

interface DataResponse<T> {
  data?: T
  isLoading: boolean
  isError: any
}

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export function useAxios<T>(url: string, key: string): DataResponse<T> {
  const { data: payload, error } = useSWR<DataPaylaod<T>>(url, fetcher)
  const data = payload ? payload[key] : undefined
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  }
}

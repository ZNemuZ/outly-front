import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Post } from '../types'
import { useError } from './userError'

export const useQueryPosts = () => {
  const { switchErrorHandling } = useError()
  const getPosts = async () => {
    const { data } = await axios.get<Post[]>(
      `${import.meta.env.VITE_API_URL}/posts`,
      { withCredentials: true }
    )
    return data
  }
  return useQuery<Post[], Error>({
    queryKey: ['posts'], //識別用キー
    queryFn: getPosts, //データを取得する関数
    staleTime: Infinity, //キャッシュを無期限
    meta: {
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    },
  })
}

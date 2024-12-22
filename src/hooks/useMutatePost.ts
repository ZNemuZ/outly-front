import axios from 'axios'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { Post } from '../types'
import useStore from '../store'
import { useError } from './userError'

export const useMutatPost = () => {
  const queryClient = useQueryClient()
  const { switchErrorHandling } = useError()
  const resetEditedPost = useStore((state) => state.resetEditedPost)

  const createPostMutation = useMutation({
    mutationFn: async (
      post: Omit<Post, 'id' | 'username' | 'nice_count' | 'created_at'>
    ) => {
      const { data } = await axios.post<Post>(
        `${import.meta.env.VITE_API_URL}/posts`,
        post
      )
    },
    onSuccess: (res) => {
      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])
      if (previousPosts) {
        queryClient.setQueryData(['posts'], [...previousPosts, res]) //既存のpostが存在する場合は末尾に追加
      }
      resetEditedPost()
    },
    onError: (err: any) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response.data)
      }
    },
  })
  const deletePostMutation = useMutation({
    mutationFn: async (id: number) =>
      axios.delete(`${import.meta.env.VITE_API_URL}/posts,${id}`),
    onSuccess: (_, variables) => {
      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])
      if (previousPosts) {
        queryClient.setQueryData<Post[]>(
          ['posts'],
          previousPosts.filter((post) => post.id == variables) //削除したオブジェクトだけを取り除く
        )
      }
    },
    onError: (err: any) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response.data)
      }
    },
  })

  const listPostMutation = useMutation({
    mutationFn: async () => axios.get(`${import.meta.env.VITE_API_URL}/posts}`),
    onSuccess: (res) => {},
    onError: (err: any) => {
      if (err.responce.data.message) {
        switchErrorHandling(err.responce.data.message)
      } else {
        switchErrorHandling(err.responce.data)
      }
    },
  })
  return { createPostMutation, deletePostMutation }
}

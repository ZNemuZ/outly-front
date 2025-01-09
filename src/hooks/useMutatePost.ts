import axios from 'axios'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { Post } from '../types'
import useStore from '../store'
import { useError } from './userError'

export const useMutatePost = () => {
  const queryClient = useQueryClient()
  const { switchErrorHandling } = useError()
  const resetEditedPost = useStore((state) => state.resetEditedPost)

  const createPostMutation = useMutation({
    mutationFn: async (
      post: Omit<Post, 'id' | 'user_id' | 'nice_count' | 'created_at'>
    ) => {
      await axios.post<Post>(`${import.meta.env.VITE_API_URL}/posts`, post)
    },
    onSuccess: () => {
      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])
      if (previousPosts) {
        queryClient.invalidateQueries({ queryKey: ['posts'] })
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
      axios.delete(`${import.meta.env.VITE_API_URL}/posts/${id}`),
    onSuccess: (_, variables) => {
      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])
      if (previousPosts) {
        queryClient.setQueryData<Post[]>(
          ['posts'],
          previousPosts.filter((post) => post.id == variables) //削除したオブジェクトだけを取り除く
        )
        queryClient.invalidateQueries({ queryKey: ['posts'] })
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
  const nicePostMutation = useMutation({
    mutationFn: async (id: number) =>
      axios.delete(`${import.meta.env.VITE_API_URL}/posts/${id}`),
    onSuccess: (_, variables) => {
      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])
      if (previousPosts) {
        queryClient.setQueryData<Post[]>(
          ['posts'],
          previousPosts.filter((post) => post.id == variables) //削除したオブジェクトだけを取り除く
        )
        queryClient.invalidateQueries({ queryKey: ['posts'] })
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

  return { createPostMutation, deletePostMutation, nicePostMutation }
}

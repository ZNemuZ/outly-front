import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import useStore from '../store'
import { LoginCredential, SignupCredential } from '../types'
import { useError } from './userError'

export const useMutateAuth = () => {
  const navigate = useNavigate() //ルーター操作用の関数を取得
  const resetEditedPost = useStore((state) => state.resetEditedPost)
  const { switchErrorHandling } = useError()

  const loginMutation = useMutation({
    mutationFn: async (user: LoginCredential) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/login`, user),
    onSuccess: () => {
      navigate('/post')
    },
    onError: (err: any) => {
      if (err.response?.data?.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response?.data)
      }
    },
  })
  const signupMutation = useMutation({
    mutationFn: async (user: SignupCredential) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/signup`, user),
    onError: (err: any) => {
      if (err.response?.data?.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response?.data)
      }
    },
  })
  const logoutMutation = useMutation({
    mutationFn: async () =>
      await axios.post(`${import.meta.env.VITE_API_URL}/`),
    onSuccess: () => {
      resetEditedPost()
      navigate('/')
    },
    onError: (err: any) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response.data)
      }
    },
  })
  return { loginMutation, signupMutation, logoutMutation }
}

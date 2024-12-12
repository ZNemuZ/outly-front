import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import useStore from '../store'
import { Credential } from '../types'
import { useError } from './userError'

export const useMutateAuth = () => {
  const navigate = useNavigate()
  const resetEditedPost = useStore((state) => state.resetEditedPost)
  const { switchErrorHandling } = useError()

  const loginMutation = useMutation(
    async (user: Credential) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/login`, user, err),
    {
      onSuccess: () => {
        navigate('/post')
      },
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.responce.data.message)
        } else {
          switchErrorHandling(err.responce.data)
        }
      },
    }
  )
}

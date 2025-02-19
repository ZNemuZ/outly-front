import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutateAuth } from '../hooks/useMutateAuth'
export const Login = () => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const { loginMutation } = useMutateAuth()

  const submitLoginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutation.mutate({
      email: email,
      password: pw,
    })
  }

  return (
    <div className="bg-[#202123] min-h-screen flex justify-center items-center">
      <div className="bg-[#2b2d31] p-8 rounded-lg  shadow-[0px_0px_15px_rgba(255,255,255,0.2)] text-center max-w-sm w-full ">
        <h1 className="text-3xl font-bold text-gray-300 mb-6">Log In</h1>
        <form className="space-y-4" onSubmit={submitLoginHandler}>
          <div className="flex items-center bg-[#202123] p-3 rounded-full shadow-inner">
            <span className="text-gray-400 text-xl mr-3">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              placeholder="EmailAddress"
              className="bg-transparent flex-1 text-gray-300 focus:outline-none"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="flex items-center bg-[#202123] p-3 rounded-full shadow-inner">
            <span className="text-gray-400 text-xl mr-3">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent flex-1 text-gray-300 focus:outline-none"
              onChange={(e) => setPw(e.target.value)}
              value={pw}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-gray-900 font-semibold py-3 rounded-full hover:bg-gray-300 transition"
            disabled={!email || !pw}
          >
            Log In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-400">
            Already have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:underline">
              signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

import { Avatar } from '@mui/material'
import React from 'react'

const Postbox = () => {
  return (
    <div className="w-screen flex justify-center items-start w-full mt-10">
      <div className="bg-[#262626] rounded-lg shadow-lg p-4 text-gray-300 w-full max-w-[900px]">
        <form>
          <div className="flex items-center space-x-3 mb-3">
            {/* ユーザーアイコン */}
            <Avatar alt="User Icon" className="h-8 w-8 rounded-full" />
            {/* 入力フィールド */}
            <input
              type="text"
              placeholder="Let's post it!"
              className="w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none"
            />
          </div>
          {/* Post ボタン */}
          <div className="flex justify-end">
            <button
              className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-300 transition"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Postbox

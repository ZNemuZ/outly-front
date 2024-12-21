import { Avatar } from '@mui/material'
import React, { FormEvent } from 'react'
import { useMutatPost } from '../hooks/useMutatePost'
import useStore from '../store'

const Postbox = () => {
  const { createPostMutation } = useMutatPost()
  const { editedPost } = useStore()
  const updatePost = useStore((state) => state.updateEditedPost)
  const submitPostHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createPostMutation.mutate({
      title: editedPost.title,
      content: editedPost.content,
    })
  }
  return (
    <div className="w-screen flex items-start mt-10">
      <div className="bg-[#262626] rounded-lg shadow-[0px_0px_8px_rgba(255,255,255,0.3)] p-4 text-gray-300 w-full max-w-[900px] mr-20">
        <form onSubmit={submitPostHandler}>
          <div className="flex items-start space-x-3 mb-3">
            {/* ユーザーアイコン */}
            <Avatar alt="User Icon" className="h-8 w-8 rounded-full mr-1" />

            <div className="flex flex-col w-full space-y-3">
              <div
                className="border-b border-gray-300 pb-2 mb-4 "
                style={{ borderColor: 'rgba(235, 228, 228, 0.2)' }}
              >
                {/* 入力フィールド */}
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none"
                  onChange={(e) =>
                    updatePost({ ...editedPost, title: e.target.value })
                  }
                  value={editedPost.title || ''}
                  maxLength={50}
                />
              </div>
              {/* 入力フィールド */}
              <input
                type="text"
                placeholder="Let's post it!"
                className="w-full bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none"
                onChange={(e) =>
                  updatePost({ ...editedPost, content: e.target.value })
                }
                value={editedPost.content || ''}
                maxLength={300}
              />
            </div>
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

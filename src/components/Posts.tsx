import { Avatar } from '@mui/material'
import dayjs from 'dayjs'
import DeleteIcon from '@mui/icons-material/Delete'
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { useMutatePost } from '../hooks/useMutatePost'
import React from 'react'
interface PostProps {
  id: number
  username: string
  user_id: string
  title: string
  content: string
  nice_count: string
  created_at: Date
}
const formatJapaneseDate = (isoDate: string): string => {
  const date = dayjs(isoDate)
  return `${date.format('YYYY年M月D日H時m分')}`
}

const Posts: React.FC<PostProps> = ({
  id,
  username,
  user_id,
  title,
  content,
  // nice_count,
  created_at,
}) => {
  const { deletePostMutation } = useMutatePost()
  return (
    <div className="flex space-x-4 p-4 border-b border-gray-700 bg-[#262626] mt-10 w-[1630px]">
      {/* Icon */}
      <div className="w-12 h-12">
        <Avatar alt="User Icon" className="w-12 h-12" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 relative">
        {/* Header */}
        <div className="flex items-center">
          <div className="flex space-x-2">
            <h3 className="font-semibold text-gray-100">{username}</h3>
            <span className="text-gray-500 text-sm">@{user_id}</span>
          </div>
          <div className="text-gray-500 text-sm ml-10">
            ・{formatJapaneseDate(created_at.toString())}
          </div>
          <DeleteIcon
            className=" absolute right-2 h-5 w-5 text-gray-500 cursor-pointer "
            onClick={() => {
              deletePostMutation.mutate(id)
            }}
          />
        </div>

        {/* Title */}
        <div className="font-semibold text-white mt-2">{title}</div>

        {/* Content */}
        <div className="text-gray-300 mt-1 w-[1530px] break-words overflow-hidden ">
          {/* 改行対応 */}
          {content.split('\n').map((line, index) => (
            //余計なHTMLを使わないようにするためにReact.Fragmentを使用
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>

        {/* Footer */}
        <div className="flex space-x-6 mt-4 text-gray-400 text-sm">
          {/* <div className="flex items-center space-x-1">
            <span className="material-icons text-gray-500">comment</span>
            <span>10</span>
          </div> 
          <div className="flex items-center space-x-1">
            <span className="material-icons text-gray-500">
              <ThumbUpAltIcon
                className="h-5 w-5 text-gray-500 cursor-pointer"
                onClick={() => {
                  nicePostMutation.mutate(id)
                }}
              />
            </span>
            <span>{nice_count}</span>
          </div>
          {/* <div className="flex items-center space-x-1">
            <span className="material-icons text-gray-500">visibility</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Posts

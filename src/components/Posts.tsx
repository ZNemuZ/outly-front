import { Avatar } from '@mui/material'

interface PostProps {
  username: string
  user_id: string
  title: string
  content: string
  nice_count: string
}
const Posts: React.FC<PostProps> = ({
  username,
  user_id,
  title,
  content,
  nice_count,
}) => {
  return (
    <div className="flex space-x-4 p-4 border-b border-gray-700 bg-[#262626] mt-10 w-[1630px]">
      {/* Icon */}
      <div className="w-12 h-12">
        <Avatar alt="User Icon" className="w-12 h-12" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-100">{username}</h3>
            <span className="text-gray-500 text-sm">{user_id}</span>
          </div>
          <span className="text-gray-500 text-sm">43 m</span>
        </div>

        {/* Title */}
        <div className="font-semibold text-white mt-2">{title}</div>

        {/* Content */}
        <div className="text-gray-300 mt-1">{content}</div>

        {/* Footer */}
        <div className="flex space-x-6 mt-4 text-gray-400 text-sm">
          {/* <div className="flex items-center space-x-1">
            <span className="material-icons text-gray-500">comment</span>
            <span>10</span>
          </div> */}
          <div className="flex items-center space-x-1">
            <span className="material-icons text-gray-500">nice_count</span>
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

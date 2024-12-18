import React from 'react'

type SidebarOptionProps = {
  text: string // 必須: 表示するテキスト (string型)
  Icon: React.ElementType // 必須: アイコン (Reactコンポーネント)
}
const SidebarOption: React.FC<SidebarOptionProps> = ({ text, Icon }) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-200 w-full">
      <Icon className="text-gray-300 h-5 w-5" />
      <h2 className="text-gray-300 text-sm font-medium">{text}</h2>
    </div>
  )
}

export default SidebarOption

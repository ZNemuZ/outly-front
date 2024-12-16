import React from 'react'

type SidebarOptionProps = {
  text: string // 必須: 表示するテキスト (string型)
  Icon: React.ElementType // 必須: アイコン (Reactコンポーネント)
}
const SidebarOption: React.FC<SidebarOptionProps> = ({ text, Icon }) => {
  return (
    <div>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption

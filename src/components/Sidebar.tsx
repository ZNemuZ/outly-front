import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SettingsIcon from '@mui/icons-material/Settings'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-[#1E1E1E] min-h-screen  items-start text-[#E8E8E8]">
      {/* ユーザーネーム*/}

      {/* Home*/}
      <SidebarOption text="Home" Icon={HomeIcon} />
      {/* Search*/}
      <SidebarOption text="Search" Icon={SavedSearchIcon} />
      {/* Profile*/}
      <SidebarOption text="Profile" Icon={AccountBoxIcon} />
      {/* Settings*/}
      <SidebarOption text="Settings" Icon={SettingsIcon} />
    </div>
  )
}

export default Sidebar

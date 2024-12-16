import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SettingsIcon from '@mui/icons-material/Settings'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
  return (
    <div className="bg-[#1E1E1E] min-h-screen w-[200px] flex flex-col justify-start items-center px-4">
      <div className="w-full flex flex-col space-y-4 mt-6">
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
    </div>
  )
}

export default Sidebar

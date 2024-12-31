import HomeIcon from '@mui/icons-material/Home'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
  return (
    <div className="bg-[#1E1E1E] min-h-screen w-[200px] flex flex-col justify-start items-center px-4 shadow-[0px_0px_8px_rgba(255,255,255,0.3)] pr-10 fixed top-0 left-0 h-full">
      <div className="w-full flex flex-col space-y-4 mt-8">
        {/* User*
        <AccountCircleOutlinedIcon className="text-gray-300 h-5 w-5" />/}

        {/* Home*/}
        <SidebarOption text="Home" Icon={HomeIcon} />
        {/* Search
        <SidebarOption text="Search" Icon={SavedSearchIcon} />*/}
        {/* Profile*/}
        <SidebarOption text="Profile" Icon={AccountBoxIcon} />
        {/* Settings
        <SidebarOption text="Settings" Icon={SettingsIcon} />*/}
      </div>
    </div>
  )
}

export default Sidebar

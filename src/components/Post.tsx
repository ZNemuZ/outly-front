import Sidebar from './Sidebar'
import Timeline from './Timeline'

export const Post = () => {
  return (
    <div className="bg-[#202123] min-h-screen flex overflow-x-hidden ">
      <Sidebar />
      <div className="ml-60">
        <Timeline />
      </div>
    </div>
  )
}

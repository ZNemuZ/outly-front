import Sidebar from './Sidebar'
import Timeline from './Timeline'

export const Post = () => {
  return (
    <div className="bg-[#202123] min-h-screen flex">
      <Sidebar />
      <Timeline />
    </div>
  )
}

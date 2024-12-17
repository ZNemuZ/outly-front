import Postbox from './Postbox'
import Posts from './Posts'

const Timeline = () => {
  return (
    <div>
      {/*Header */}
      <div>
        <h2>Home</h2>
      </div>
      {/*PostBox */}
      <Postbox />
      {/*Post */}
      <Posts />
    </div>
  )
}

export default Timeline

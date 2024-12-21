import Postbox from './Postbox'
import Posts from './Posts'

const Timeline = () => {
  return (
    <div ml-64>
      {/*Header */}
      <div>
        <h2>Home</h2>
      </div>
      {/*PostBox */}
      <Postbox />
      {/*Post */}
      <Posts username="test" title="testTitle" content="Lets post it" />
      <Posts username="" title="" content="" />
      {/*<Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts /> */}
    </div>
  )
}

export default Timeline

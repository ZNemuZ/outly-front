import { title } from 'process'
import { useQueryPosts } from '../hooks/useQueryPosts'
import Postbox from './Postbox'
import Posts from './Posts'

const Timeline = () => {
  const { data } = useQueryPosts() //post読み込み
  return (
    <div>
      {/*Header */}
      <div>
        <h2>Home</h2>
      </div>
      {/*PostBox */}
      <Postbox />
      {/*Post */}
      <Posts username="test" title="testTitle" content="Lets post it" />
      <Posts username="" title="" content="" />
      <ul>
        {data?.map((post) => (
          <Posts
            username={post.username}
            title={post.title}
            content={post.content}
          />
        ))}
      </ul>
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

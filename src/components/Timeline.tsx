import { title } from 'process'
import { useQueryPosts } from '../hooks/useQueryPosts'
import Postbox from './Postbox'
import Posts from './Posts'

const Timeline = () => {
  const { data, isLoading } = useQueryPosts() //post読み込み
  return (
    <div>
      {/*Header */}
      <div>
        <h2>Home</h2>
      </div>
      {/*PostBox */}
      <Postbox />
      {/*Post */}
      {/* <Posts username="test" title="testTitle" content="Lets post it" />
      <Posts username="" title="" content="" /> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((posts) => (
            <Posts
              key={posts.id} //あとでuuidにしたいよ
              username={posts.user_name}
              title={posts.title}
              content={posts.content}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Timeline

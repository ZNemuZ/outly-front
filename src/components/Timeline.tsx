import { useQueryPosts } from '../hooks/useQueryPosts'
import Postbox from './Postbox'
import Posts from './Posts'

const Timeline = () => {
  const { data, isLoading } = useQueryPosts() //post読み込み
  return (
    <div>
      {/*Header */}

      {/*PostBox */}
      <Postbox />
      {/*Post */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((posts) => (
            <Posts
              key={posts.id} //uuidにしたい
              id={posts.id}
              username={posts.user_name}
              user_id={posts.user_id}
              title={posts.title}
              content={posts.content}
              nice_count={posts.nice_count}
              created_at={posts.created_at}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Timeline

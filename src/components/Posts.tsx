import { Avatar } from '@mui/material'
import React from 'react'

const Posts = () => {
  return (
    <div>
      {/*Icon*/}
      <div>
        <Avatar />
      </div>
      {/*Header*/}
      <div>
        <div>
          <h3>postsss</h3>
          <span>@test_user</span>
        </div>
        {/*Title*/}
        <div>Test</div>
        {/*Content*/}
        <div>React</div>
      </div>
    </div>
  )
}

export default Posts

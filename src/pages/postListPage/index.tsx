import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { IPost } from '../../interfaces/post'
import { fetchPosts } from '../../utils/apiCalls'
import Post, { PostSkeleton } from './post'

import * as S from './styled'

const PostListPage = () => {
  const [showError, setShowError] = useState(false)

  const { data, isLoading, error } = useQuery<IPost[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) {
    return (
      <S.PostList>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </S.PostList>
    )
  }

  if (error || showError) {
    return <S.ErrorBanner severity='error'>Error when loading posts</S.ErrorBanner>
  }

  return (
    <S.PostList>
      {data?.map((post) => <Post post={post} key={post.id} errorHandler={() => setShowError(true)} />)}
    </S.PostList>
  )
}

export default PostListPage

import React from 'react'
import { useQuery } from 'react-query'

import { IPost } from '../../interfaces/post'
import { fetchPosts } from '../../utils/apiCalls'
import Post from './post'

import * as S from './styled'

const PostListPage = () => {
  const { data, isLoading, error } = useQuery<IPost[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Error during data loading</div>

  return <S.PostList>{data?.map((post) => <Post post={post} />)}</S.PostList>
}

export default PostListPage

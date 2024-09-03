import React from 'react'
import { useQuery } from 'react-query'

import { Endpoints } from '../../endpoints'
import { IPost } from '../../interfaces/post'

import * as S from './styled'
import Post from './post'

const fetchPosts = async (): Promise<IPost[]> => {
  const response = await fetch(Endpoints.posts)
  if (!response.ok) {
    throw new Error()
  }
  return response.json()
}

const PostList = () => {
  const { data, isLoading, error } = useQuery<IPost[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Error during data loading</div>

  return <S.PostList>{data?.map((post) => <Post post={post} />)}</S.PostList>
}

export default PostList

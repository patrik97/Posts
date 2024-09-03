import React from 'react'
import { useQuery } from 'react-query'

import { Endpoints } from '../../endpoints'
import { Post } from '../../interfaces/post'

import * as S from './styled'

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(Endpoints.posts)
  if (!response.ok) {
    throw new Error()
  }
  return response.json()
}

const PostList = () => {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  })

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Error during data loading</div>

  return <S.PostList>{data?.map((post) => <div key={post.id}>{post.title}</div>)}</S.PostList>
}

export default PostList

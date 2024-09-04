import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { fetchPostById } from '../../utils/apiCalls'
import { IPost } from '../../interfaces/post'
import PostBody from './postBody'
import PostComments from './postComments'

import * as S from './styled'

const PostDetailPage = () => {
  const { postId } = useParams()
  const [showError, setShowError] = useState(false)

  const { data, isLoading, error } = useQuery<IPost>({
    queryKey: ['post', postId],
    queryFn: () => fetchPostById(postId ?? '-1'),
  })

  // Tab title
  useEffect(() => {
    document.title = `Post: ${data?.title.substring(0, 10)}`
  }, [data])

  if (isLoading) {
    return <S.Loader />
  }

  if (error || !data || showError) {
    return <S.ErrorBanner severity='error'>Error when loading post</S.ErrorBanner>
  }

  return (
    <S.PostDetailWrapper>
      <PostBody post={data} errorHandler={() => setShowError(true)} />
      <PostComments postId={postId ?? '-1'} errorHandler={() => setShowError(true)} />
    </S.PostDetailWrapper>
  )
}

export default PostDetailPage

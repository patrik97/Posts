import React from 'react'

import * as S from './styled'
import { useQuery } from 'react-query'
import { IComment } from '../../../interfaces/comment'
import { fetchCommentsByPostId } from '../../../utils/apiCalls'

type CommentsProps = {
  postId: string
}

const PostComments: React.FC<CommentsProps> = ({ postId }) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<IComment[]>({
    queryKey: ['comment', postId],
    queryFn: () => fetchCommentsByPostId(postId),
  })

  return <S.CommentsWrapper />
}

export default PostComments

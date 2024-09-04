import React from 'react'

import * as S from './styled'
import { useQuery } from 'react-query'
import { IComment } from '../../../interfaces/comment'
import { fetchCommentsByPostId } from '../../../utils/apiCalls'
import Skeleton from '../../../components/skeleton'
import Comment from './comment'

type CommentsProps = {
  postId: string
}

const PostComments: React.FC<CommentsProps> = ({ postId }) => {
  const { data, isLoading, error } = useQuery<IComment[]>({
    queryKey: ['comment', postId],
    queryFn: () => fetchCommentsByPostId(postId),
  })

  return (
    <S.CommentsWrapper>
      <h2>Comments</h2>
      {isLoading ? (
        <>
          <Skeleton width='80%' height='150px' />
          <Skeleton width='80%' height='150px' />
          <Skeleton width='80%' height='150px' />{' '}
        </>
      ) : (
        <>{data?.map((comment) => <Comment comment={comment} key={comment.id} />)}</>
      )}
    </S.CommentsWrapper>
  )
}

export default PostComments

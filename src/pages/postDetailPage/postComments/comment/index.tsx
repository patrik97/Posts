import React from 'react'

import * as S from './styled'
import { IComment } from '../../../../interfaces/comment'

type CommentProps = {
  comment: IComment
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <S.Comment>
      <S.Title>{comment.name}</S.Title>
      <S.Author>{comment.email}</S.Author>
      <S.Text>{comment.body}</S.Text>
    </S.Comment>
  )
}

export default Comment

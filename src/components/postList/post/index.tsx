import React from 'react'
import { useQueries } from 'react-query'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { IPost } from '../../../interfaces/post'
import { Endpoints } from '../../../endpoints'
import { IUser } from '../../../interfaces/user'
import { IComment } from '../../../interfaces/comment'

import * as S from './styled'

const fetchUsers = async (): Promise<IUser[]> => {
  const response = await fetch(Endpoints.users)
  if (!response.ok) {
    throw new Error()
  }
  return response.json()
}

const fetchComments = async (): Promise<IComment[]> => {
  const response = await fetch(Endpoints.comments)
  if (!response.ok) {
    throw new Error()
  }
  return response.json()
}

const Post = (props: { post: IPost }) => {
  const [users, comments] = useQueries([
    { queryKey: ['users', 1], queryFn: fetchUsers },
    { queryKey: ['comments', 2], queryFn: fetchComments },
  ])

  const isLoading = users.isLoading || comments.isLoading
  const error = users.error || comments.error

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Error during data loading</div>

  const userName = users?.data?.find((user) => user.id === props.post.userId)?.name ?? 'Unknown'
  const commentsCount = comments?.data?.filter((comment) => comment.postId === props.post.id).length ?? 0

  return (
    <S.PostWrapper>
      <S.Post>
        <S.TitleAndAuthor>
          <S.Title>{props.post.title}</S.Title>
          <S.AuthorName>{userName}</S.AuthorName>
        </S.TitleAndAuthor>
        <S.TextAndComments>
          <S.Text>{props.post.body.substring(0, 60)} ...</S.Text>
          <S.Comments>Comments ({commentsCount})</S.Comments>
        </S.TextAndComments>
      </S.Post>
      <ArrowForwardIosIcon className='arrow' />
    </S.PostWrapper>
  )
}

export default Post

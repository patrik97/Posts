import { useQueries } from 'react-query'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { IPost } from '../../../interfaces/post'
import { fetchCommentsByPostId, fetchUserById } from '../../../utils/apiCalls'

import * as S from './styled'

const Post = (props: { post: IPost }) => {
  const [user, comments] = useQueries([
    { queryKey: ['user', 1], queryFn: () => fetchUserById(props.post.userId) },
    { queryKey: ['comments', 2], queryFn: () => fetchCommentsByPostId(props.post.id) },
  ])

  const isLoading = user.isLoading || comments.isLoading

  if (isLoading) return <div>Loading</div>

  return (
    <S.PostWrapper to={`/${props.post.id}`}>
      <S.Post>
        <S.TitleAndAuthor>
          <S.Title className='title'>{props.post.title}</S.Title>
          <S.AuthorName>{user.data?.name}</S.AuthorName>
        </S.TitleAndAuthor>
        <S.TextAndComments>
          <S.Text>{props.post.body.substring(0, 60)} ...</S.Text>
          <S.Comments>Comments ({comments.data?.length ?? 0})</S.Comments>
        </S.TextAndComments>
      </S.Post>
      <ArrowForwardIosIcon className='arrow' />
    </S.PostWrapper>
  )
}

export default Post

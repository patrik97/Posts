import { useQueries } from 'react-query'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { IPost } from '../../../interfaces/post'
import { fetchCommentsByPostId, fetchUserById } from '../../../utils/apiCalls'

import * as S from './styled'

type PostProps = {
  post: IPost
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [user, comments] = useQueries([
    { queryKey: ['user', post.userId], queryFn: () => fetchUserById(post.userId.toString()) },
    { queryKey: ['comment', post.id], queryFn: () => fetchCommentsByPostId(post.id.toString()) },
  ])

  const isLoading = user.isLoading || comments.isLoading

  if (isLoading) return <div>Loading</div>

  return (
    <S.PostWrapper to={`/${post.id}`}>
      <S.Post>
        <S.TitleAndAuthor>
          <S.Title className='title'>{post.title}</S.Title>
          <S.AuthorName>{user.data?.name}</S.AuthorName>
        </S.TitleAndAuthor>
        <S.TextAndComments>
          <S.Text>{post.body.substring(0, 60)} ...</S.Text>
          <S.Comments>Comments ({comments.data?.length ?? 0})</S.Comments>
        </S.TextAndComments>
      </S.Post>
      <ArrowForwardIosIcon className='arrow' />
    </S.PostWrapper>
  )
}

export default Post

import { useQueries } from 'react-query'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { IPost } from '../../../interfaces/post'
import { fetchComments, fetchCommentsByPostId, fetchUserById, fetchUsers } from '../../../utils/apiCalls'

import * as S from './styled'

export const PostSkeleton = () => {
  return (
    <S.PostWrapperSkeleton>
      <S.Post>
        <S.TitleAndAuthor>
          <S.ResponsivnessSkeleton height='40px' />
          <S.ResponsivnessSkeleton height='28px' />
        </S.TitleAndAuthor>
        <S.TextAndComments>
          <S.ResponsivnessSkeleton height='64px' />
          <S.ResponsivnessSkeleton height='28px' />
        </S.TextAndComments>
      </S.Post>
      <ArrowForwardIosIcon className='arrow' />
    </S.PostWrapperSkeleton>
  )
}

type PostProps = {
  post: IPost
  errorHandler: () => void
}

const Post: React.FC<PostProps> = ({ post, errorHandler }) => {
  const [user, comments] = useQueries([
    { queryKey: ['users'], queryFn: fetchUsers },
    { queryKey: ['comments'], queryFn: fetchComments },
  ])

  const isLoading = user.isLoading || comments.isLoading
  const error = user.error || comments.error

  if (isLoading) {
    return <PostSkeleton />
  }

  if (error) {
    errorHandler()
  }

  return (
    <S.PostWrapper to={`/${post.id}`}>
      <S.Post>
        <S.TitleAndAuthor>
          <S.Title className='title'>{post.title}</S.Title>
          <S.AuthorName>{user.data?.find((user) => user.id === post.userId)?.name}</S.AuthorName>
        </S.TitleAndAuthor>
        <S.TextAndComments>
          <S.Text>{post.body.substring(0, 60)} ...</S.Text>
          <S.Comments>
            Comments ({comments.data?.filter((comment) => comment.postId === post.id).length ?? 0})
          </S.Comments>
        </S.TextAndComments>
      </S.Post>
      <ArrowForwardIosIcon className='arrow' />
    </S.PostWrapper>
  )
}

export default Post

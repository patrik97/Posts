import { useQuery } from 'react-query'
import { IUser } from '../../../interfaces/user'
import { IPost } from '../../../interfaces/post'
import { fetchUserById } from '../../../utils/apiCalls'

import * as S from './styled'
import Skeleton from '../../../components/skeleton'

type PostBodyProps = {
  post: IPost
  errorHandler: () => void
}

const PostBody: React.FC<PostBodyProps> = ({ post, errorHandler }) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<IUser>({
    queryKey: ['user', post.userId],
    queryFn: () => fetchUserById(post.userId.toString()),
  })

  if (error) {
    errorHandler()
  }

  return (
    <S.PostBodyWrapper>
      {isLoading ? (
        <>
          <Skeleton width='80%' height='24px' />
          <Skeleton width='20%' height='20px' />
          <Skeleton width='80%' height='150px' />
        </>
      ) : (
        <>
          <S.Title>{post.title}</S.Title>
          <S.Author>{user?.name}</S.Author>
          <S.Text>{post.body}</S.Text>
        </>
      )}
    </S.PostBodyWrapper>
  )
}

export default PostBody

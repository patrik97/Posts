import { useParams } from 'react-router-dom'

import * as S from './styled'
import { useQuery } from 'react-query'
import { fetchPostById } from '../../utils/apiCalls'
import { IPost } from '../../interfaces/post'
import PostBody from './postBody'
import PostComments from './postComments'

const PostDetailPage = () => {
  const { postId } = useParams()

  const { data, isLoading, error } = useQuery<IPost>({
    queryKey: ['post', postId],
    queryFn: () => fetchPostById(postId ?? '-1'),
  })

  if (isLoading || error || !data) {
    return <S.Loader />
  }

  return (
    <S.PostDetailWrapper>
      <PostBody post={data} />
      <PostComments postId={postId ?? '-1'} />
    </S.PostDetailWrapper>
  )
}

export default PostDetailPage

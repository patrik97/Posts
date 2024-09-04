import { useParams } from 'react-router-dom'

import * as S from './styled'

const PostDetailPage = () => {
  const { articleId } = useParams()

  return <S.PostDetailWrapper>{articleId}</S.PostDetailWrapper>
}

export default PostDetailPage

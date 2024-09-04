import { useParams } from 'react-router-dom'

const PostDetailPage = () => {
  const { articleId } = useParams()

  return <div>{articleId}</div>
}

export default PostDetailPage

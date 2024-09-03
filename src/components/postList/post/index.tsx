import { IPost } from '../../../interfaces/post'
import * as S from './styled'

const Post = (props: { post: IPost }) => {
  return (
    <S.Post>
      <S.TitleAndAuthor>
        <S.Title>{props.post.title}</S.Title>
        <S.AuthorName>{props.post.userId}</S.AuthorName>
      </S.TitleAndAuthor>
      <S.TextAndComments>
        <S.Text>{props.post.body.substring(0, 60)} ...</S.Text>
        <S.Comments>Comments (2)</S.Comments>
      </S.TextAndComments>
    </S.Post>
  )
}

export default Post

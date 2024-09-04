import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from '../../../styles/media'
import { COLORS } from '../../../styles/colors'

export const PostWrapper = styled(Link)`
  padding: 20px;
  display: flex;
  flex-direction: row;
  background-color: ${COLORS.primary};
  justify-content: space-between;
  max-width: 450px;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: ${COLORS.secondary};
    color: white;

    .arrow {
      transform: scale(2);
      transition: transform 1s ease;
    }

    .title {
      text-decoration: underline;
    }
  }
`

export const Post = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleAndAuthor = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  text-transform: capitalize;

  ${media.maxSm`
    font-size: 16px;  
  `}
`

export const AuthorName = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 14px;
`

export const TextAndComments = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  margin: 0 0 10px 0;
  font-size: 16px;
`

export const Comments = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 14px;
`

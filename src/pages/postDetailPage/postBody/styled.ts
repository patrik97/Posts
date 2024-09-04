import styled from 'styled-components'
import { media } from '../../../styles/media'

export const PostBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md`
    width: 45%;
  `}
`

export const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
`

export const Author = styled.div`
  font-style: italic;
  font-size: 20px;
`

export const Text = styled.div`
  margin: 25px 0 0 0;
  font-size: 20px;
`

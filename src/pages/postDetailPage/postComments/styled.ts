import styled from 'styled-components'
import { media } from '../../../styles/media'

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.md`
    width: 45%;
  `}
`

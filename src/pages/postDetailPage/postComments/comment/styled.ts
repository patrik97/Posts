import styled from 'styled-components'
import { COLORS } from '../../../../styles/colors'

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.lightGrey};
  margin: 5px 0;
  padding: 15px;
`

/* Those elements could possibly be common with the ones in PostBody with some parameters like font size
   However, I do not use abstraction for such small elements - it's better to keep them unique */
export const Title = styled.h3`
  margin: 0;
  text-transform: capitalize;
`

export const Author = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 14px;
`

export const Text = styled.p`
  font-size: 16px;
`

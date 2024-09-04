import styled from 'styled-components'
import { media } from '../../styles/media'
import { Alert } from '@mui/material'

export const PostList = styled.div`
  margin: 0;
  padding: 140px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 450px));
  grid-auto-rows: 260px;
  grid-gap: 50px;
  align-items: bottom;
  justify-content: center;

  ${media.maxMd`
      grid-template-columns: repeat(auto-fill, 90vw);
      grid-gap: 20px;
  `}
`

export const ErrorBanner = styled(Alert)`
  margin: 20px 5%;
`

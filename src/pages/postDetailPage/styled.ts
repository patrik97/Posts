import styled from 'styled-components'
import { CircularProgress } from '@mui/material'
import { Alert } from '@mui/material'
import { media } from '../../styles/media'

export const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
  justify-content: space-between;
  align-items: stretch;

  ${media.maxMd`
      flex-direction: column;
      margin: 15px;
  `}
`

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const ErrorBanner = styled(Alert)`
  margin: 20px 5%;
`

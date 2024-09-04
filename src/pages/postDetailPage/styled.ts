import styled from 'styled-components'
import { CircularProgress } from '@mui/material'

export const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`

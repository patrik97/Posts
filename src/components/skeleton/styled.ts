import { Skeleton } from '@mui/material'
import styled from 'styled-components'

export const BasicSkeleton = styled(Skeleton)<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

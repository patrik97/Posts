import React from 'react'

import * as S from './styled'

type SkeletonProps = {
  width: string
  height: string
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
  return <S.BasicSkeleton width={width} height={height} />
}

export default Skeleton

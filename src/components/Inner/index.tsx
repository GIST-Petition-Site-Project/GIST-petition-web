import { FC } from 'react'
import { StyledInner } from './styles'

const Inner: FC = ({ children }): JSX.Element => {
  return <StyledInner className="inner">{children}</StyledInner>
}

export default Inner

import { MenuItem } from '@chakra-ui/react'
import styled from '@emotion/styled'

const MenuContent = styled(MenuItem)`
  &:hover {
    cursor: pointer;
    background-color: rgba(47, 54, 60, 0.94);
  }
  &:focus {
    outline: 'none';
  }
`

export { MenuContent }

import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../../style/theme'

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.INNER_MAXWIDTH};
  height: 100%;
  padding: 0 0.5em;
`

const PetitionWrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  position: relative;
  margin: 150px 0;
`

const PetitionView = styled(Box)`
  width: 100%;
  height: 100%;
  /* padding: 50px 35px; */
  text-align: center;
`

export { Inner, PetitionWrapper, PetitionView }

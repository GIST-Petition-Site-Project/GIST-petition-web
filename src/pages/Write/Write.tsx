import WritePrecaution from '../../components/WritePrecaution/WritePrecaution'
import GuideModal from '../../components/PrecautionModal/GuideModal'
import { Heading, Box, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
// 청원글 작성

const StyledBody = styled.div`
  position: relative;
  margin: 60px auto;
  padding: 50px 10px;
  max-width: 900px;
`
const StyledBoxInner = styled.div`
  margin: 30px;
`
const Write = (): JSX.Element => {
  return (
    <div>
      <StyledBody>
        <Heading as="h2" fontSize="32px">
          청원하기
        </Heading>

        <Box
          border="1px"
          borderColor="#D8D8D8"
          boxShadow="xl"
          m="60px 40px"
          p="10px"
          rounded="xl"
          verticalAlign={'baseline'}
          letterSpacing="wide"
        >
          <StyledBoxInner>
            <Stack>
              <WritePrecaution />
              <GuideModal />
            </Stack>
          </StyledBoxInner>
        </Box>
      </StyledBody>
    </div>
  )
}

export default Write

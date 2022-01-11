import WritePrecaution from '../../components/WritePrecaution/WritePrecaution'
import GuideModal from '../../components/PrecautionModal/GuideModal'
import { Heading, Box, Stack, Divider } from '@chakra-ui/react'
import styled from '@emotion/styled'
import PostEditor from '../../components/PostEditor/PostEditor'
// 청원글 작성

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
`

const StyledBoxInner = styled.div`
  margin: 30px;
`
const StyledPostEditor = styled.div`
  margin: 60px 30px;
`
const Write = (): JSX.Element => {
  return (
    <div>
      <Inner>
        <Stack
          spacing={6}
          style={{ position: 'absolute', top: '150px', width: '100%' }}
        >
          <Heading as="h2" fontSize="20px">
            청원하기
          </Heading>
          <Box
            border="1px solid #ccc"
            borderRadius="0"
            p="10px"
            letterSpacing="wide"
          >
            <StyledBoxInner>
              <Stack m="50px 2px">
                <WritePrecaution />
                <GuideModal />
              </Stack>
              <Divider orientation="horizontal" />
              <StyledPostEditor>
                <PostEditor />
              </StyledPostEditor>
            </StyledBoxInner>
          </Box>
        </Stack>
      </Inner>
    </div>
  )
}

export default Write

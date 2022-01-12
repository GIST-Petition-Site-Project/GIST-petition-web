import WritePrecaution from '../../components/WritePrecaution/WritePrecaution'
import GuideModal from '../../components/PrecautionModal/GuideModal'
import { Heading, Box, Stack, Divider } from '@chakra-ui/react'
import PostEditor from '../../components/PostEditor/PostEditor'
import { Inner, StyledBoxInner, StyledPostEditor } from './style'
// 청원글 작성

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

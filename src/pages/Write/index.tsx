import WritePrecaution from './WritePrecaution'
import GuideModal from './PrecautionModal'
import { Heading, Box, Stack, Divider } from '@chakra-ui/react'
import PostEditor from './PostEditor'
import { Inner, StyledBoxInner, StyledPostEditor } from './styles'

// 청원글 작성

const Write = (): JSX.Element => {
  return (
    <div>
      <Inner>
        <Stack
          spacing={6}
          style={{
            position: 'absolute',
            top: '150px',
            bottom: '20px',
            width: '100%',
          }}
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
              <Divider color="#ccc" />
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

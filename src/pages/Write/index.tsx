import WritePrecaution from './WritePrecaution'
import GuideModal from './PrecautionModal'
import { Heading, Stack, Divider } from '@chakra-ui/react'
import PostEditor from './PostEditor'
import {
  Inner,
  WriteStack,
  Wrapper,
  StyledBoxInner,
  StyledPostEditor,
} from './styles'

// 청원글 작성

const Write = (): JSX.Element => {
  return (
    <div>
      <Inner>
        <WriteStack spacing={6}>
          <Heading as="h2" fontSize="20px">
            청원하기
          </Heading>
          <Wrapper>
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
          </Wrapper>
        </WriteStack>
      </Inner>
    </div>
  )
}

export default Write

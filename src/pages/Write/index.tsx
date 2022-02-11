import WritePrecaution from './WritePrecaution'
import GuideModal from './GuidModal'
import { Heading, Stack, Divider } from '@chakra-ui/react'
import PostEditor from './PostEditor'
import {
  Inner,
  WriteStack,
  Wrapper,
  StyledBoxInner,
  StyledPostEditor,
} from './styles'

const Write = (): JSX.Element => {
  return (
    <Inner>
      <WriteStack spacing={6}>
        <Heading fontSize="20px">청원하기</Heading>
        <Wrapper>
          <StyledBoxInner m={{ base: '1rem', md: '2rem' }}>
            <Stack m="50px 0">
              <WritePrecaution />
              <GuideModal />
            </Stack>
            <Divider color="#ccc" m="18px" boxSize={'border-box'} />
            <StyledPostEditor m={{ base: '60px 0', sm: '60px 18px' }}>
              <PostEditor />
            </StyledPostEditor>
          </StyledBoxInner>
        </Wrapper>
      </WriteStack>
    </Inner>
  )
}

export default Write

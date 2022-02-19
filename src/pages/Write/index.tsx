import WritePrecaution from './WritePrecaution'
import GuideModal from './GuideModal'
import PostEditor from './PostEditor'
import { Heading, Stack, Divider, Box } from '@chakra-ui/react'
import { Container, WriteWrapper } from './styles'
import Inner from '../../components/Inner'

const Write = (): JSX.Element => {
  return (
    <Container>
      <Inner>
        <Stack spacing={6}>
          <Heading fontSize="20px">청원하기</Heading>
          <WriteWrapper>
            <Box m={{ base: '1rem', md: '2rem' }}>
              <Stack m="50px 0">
                <WritePrecaution />
                <GuideModal />
              </Stack>
              <Divider color="#ccc" m="18px" boxSize={'border-box'} />
              <Box m={{ base: '60px 0', sm: '60px 18px' }}>
                <PostEditor />
              </Box>
            </Box>
          </WriteWrapper>
        </Stack>
      </Inner>
    </Container>
  )
}

export default Write

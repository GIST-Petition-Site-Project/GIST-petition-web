import WritePrecaution from '../../components/WritePrecaution/WritePrecaution'
import GuideModal from '../../components/PrecautionModal/GuideModal'
import { Heading, Box, Stack } from '@chakra-ui/react'
import { Inner, StyledBoxInner } from './style'
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
              <Stack>
                <WritePrecaution />
                <GuideModal />
              </Stack>
            </StyledBoxInner>
          </Box>
        </Stack>
      </Inner>
    </div>
  )
}

export default Write

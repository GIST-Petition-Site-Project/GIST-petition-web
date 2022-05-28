import WritePrecaution from './WritePrecaution'
import GuideModal from './GuideModal'
import PostEditor from './PostEditor'
import { Heading, Stack, Divider, Box } from '@chakra-ui/react'
import { Container, WriteContainer } from './styles'
import Inner from '@components/Inner'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const Write = (): JSX.Element => {
  const t = useTranslate(locale)

  return (
    <Container>
      <Inner>
        <Stack spacing={6}>
          <Heading>{t('petition')}</Heading>
          <WriteContainer>
            <div className="write_wrapper">
              <Stack className="principle_section">
                <WritePrecaution />
                <GuideModal />
              </Stack>
              <Divider color="#ccc" m="18px" boxSize={'border-box'} />
              <Box className="editor_section">
                <PostEditor />
              </Box>
            </div>
          </WriteContainer>
        </Stack>
      </Inner>
    </Container>
  )
}

export default Write

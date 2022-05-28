import { Heading, Container, OrderedList, ListItem } from '@chakra-ui/react'
import { StylePrecaution, StyleStrong, PrincipleContents } from './styles'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const WritePrecaution = (): JSX.Element => {
  const t = useTranslate(locale)

  return (
    <>
      <Heading fontSize="20px" pl={{ base: 0, sm: '18px' }}>
        {t('principle')}
      </Heading>
      <StylePrecaution p={{ base: '18px 0', sm: '18px' }}>
        <OrderedList spacing={6} fontSize={{ base: '14px', md: '16px' }}>
          <ListItem>
            <PrincipleContents>
              {t('content1_1')}
              <StyleStrong>{t('content1_2')}</StyleStrong>
              {t('content1_3')}
            </PrincipleContents>
          </ListItem>

          <ListItem>
            <PrincipleContents>
              청원글 게시 후 30일 안에 사전동의를 받아 승인된 청원에 한해
              국민청원 게시판에 공개됩니다. 청원이 공개된 날로부터 30일 동안
              50명의 동의를 받은 청원에 대해&sbquo; GIST대학 내 관련 부서에
              청원을 보내 답변을 받아 게시합니다.
            </PrincipleContents>
          </ListItem>
          <ListItem>
            <PrincipleContents>
              {t('content3_1')}
              <StyleStrong>{t('content3_2')}</StyleStrong>
              {t('content3_3')}
            </PrincipleContents>
          </ListItem>
          <ListItem>
            <PrincipleContents>
              {t('content4_1')}
              <StyleStrong>{t('content4_2')}</StyleStrong>
              {t('content4_3')}
            </PrincipleContents>
          </ListItem>
        </OrderedList>
      </StylePrecaution>
    </>
  )
}
export default WritePrecaution

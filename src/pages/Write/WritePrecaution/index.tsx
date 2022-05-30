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
            <PrincipleContents>{t('content2')}</PrincipleContents>
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

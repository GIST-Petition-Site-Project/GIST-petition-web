import {
  useDisclosure,
  Modal,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalFooter,
} from '@chakra-ui/react'
import { List, ListItem, Container, Heading } from '@chakra-ui/react'
import {
  ViewWriteMethodButton,
  CancleButton,
  GuideModalContent,
} from './styles'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const GuideModal = (): JSX.Element => {
  const t = useTranslate(locale)

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={{ margin: '0 auto' }}>
      <ViewWriteMethodButton
        colorScheme="none"
        onClick={onOpen}
        _focus={{ outline: 'none' }}
      >
        {t('btn')}
      </ViewWriteMethodButton>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <GuideModalContent>
          <ModalHeader m="15px">{t('mainTitle')}</ModalHeader>
          <ModalBody>
            <List>
              <ListItem>
                <Heading as="h2" className="modal-font">
                  Step 1. {t('title1')}
                </Heading>
                <Container className="modal-font">{t('contents1')}</Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" className="modal-font">
                  Step 2. {t('title2')}
                </Heading>
                <Container className="modal-font">{t('contents2')}</Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" className="modal-font">
                  Step 3. {t('title3')}
                </Heading>
                <Container className="modal-font">{t('contents3')}</Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" className="modal-font">
                  Step 4. {t('title4')}
                </Heading>
                <Container className="modal-font">{t('contents4')}</Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" className="modal-font">
                  Step 5. {t('title5')}
                </Heading>
                <Container className="modal-font">{t('contents5')}</Container>
              </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <CancleButton
              colorScheme="#5A5E5D"
              onClick={onClose}
              _focus={{ outline: 'none' }}
            >
              닫기
            </CancleButton>
          </ModalFooter>
        </GuideModalContent>
      </Modal>
    </div>
  )
}
export default GuideModal

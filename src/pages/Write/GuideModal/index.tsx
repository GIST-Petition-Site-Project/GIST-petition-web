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
import steps from './steps.json'

const GuideModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={{ margin: '0 auto' }}>
      <ViewWriteMethodButton
        colorScheme="none"
        onClick={onOpen}
        _focus={{ outline: 'none' }}
      >
        청원 작성 요령 안내
      </ViewWriteMethodButton>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <GuideModalContent>
          <ModalHeader m="15px"> GIST 청원, 이렇게 등록하세요</ModalHeader>
          <ModalBody>
            <List>
              {steps.map(step => (
                <ListItem key={step.id}>
                  <Heading as="h2" className="modal-font">
                    Step {step.id}. {step.title}
                  </Heading>
                  <Container className="modal-font">{step.contents}</Container>
                </ListItem>
              ))}
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

import {
  useDisclosure,
  ModalHeader,
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
} from '@chakra-ui/react'
import { List, ListItem, Container, Heading } from '@chakra-ui/react'
import { ViewWriteMethodButton, CancleButton } from './styles'
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
        <ModalContent borderRadius={0}>
          <ModalHeader m="15px"> GIST 청원, 이렇게 등록하세요</ModalHeader>
          <ModalBody m="0 15px" textAlign={'justify'}>
            <List p="0 12px">
              {steps.map(step => (
                <ListItem key={step.id}>
                  <Heading as="h2" fontSize="16px">
                    Step {step.id}. {step.title}
                  </Heading>
                  <Container m="15px" lineHeight={'160%'} pl="0">
                    {step.contents}
                  </Container>
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
        </ModalContent>
      </Modal>
    </div>
  )
}
export default GuideModal

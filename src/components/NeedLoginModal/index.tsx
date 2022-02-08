import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NeedLoginModal = (prop: Disclosure): JSX.Element => {
  const navigate = useNavigate()

  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={prop.disclosure.isOpen}
        onClose={prop.disclosure.onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent borderRadius={'0'}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              <Text fontSize={'1.25rem'}>로그인이 필요한 기능입니다!</Text>
              <br />
              <br />
              로그인 하시겠습니까?
            </Text>
          </ModalBody>

          <ModalFooter justifyContent={'space-around'}>
            <Button
              w={'112px'}
              h={'36px'}
              borderRadius="2px"
              _focus={{ outline: 'none' }}
              bg={'#2f363c'}
              color={'#fff'}
              colorScheme={'none'}
              onClick={prop.disclosure.onClose}
            >
              아니오
            </Button>
            <Button
              w={'112px'}
              h={'36px'}
              borderRadius="2px"
              _focus={{ outline: 'none' }}
              bg={'#df3127'}
              color={'#fff'}
              colorScheme={'none'}
              onClick={() => navigate('/login')}
            >
              네
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NeedLoginModal

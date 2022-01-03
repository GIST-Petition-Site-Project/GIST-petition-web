import {
  Button,
  useDisclosure,
  ModalHeader,
  ModalBody,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
} from '@chakra-ui/react'
import { List, ListItem, Container, Heading } from '@chakra-ui/react'

function GuideModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        bg={'#616463'}
        color={'white'}
        _hover={{ background: '#616463' }}
      >
        청원 작성 요령 안내
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="15px"> GIST 청원, 이렇게 등록하세요</ModalHeader>
          <ModalCloseButton />
          <ModalBody m="15px" textAlign={'justify'}>
            <List spacing={7} m="10px" p="0 12px">
              <ListItem>
                <Heading as="h2" fontSize="16px">
                  Step 1. 기존 청원 확인
                </Heading>
                <Container m="15px" lineHeight={'160%'} pl="0">
                  새 청원글 작성 전 유사한 내용의 청원이 진행 중인지 먼저
                  확인해주세요. 새 청원글을 작성하기보다 유사한 기존 청원에
                  동의하시면 GIST 구성원의 뜻을 모으는데 도움이 됩니다.
                </Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" fontSize="16px">
                  Step 2. 제목 입력
                </Heading>
                <Container m="15px" lineHeight={'160%'} pl="0">
                  청원 내용을 대표하는 제목을 입력해주세요. 제목의 내용은 10자
                  이상으로 제한합니다.
                </Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" fontSize="16px">
                  Step 3. 카테고리 선택
                </Heading>
                <Container m="15px" lineHeight={'160%'} pl="0">
                  청원 내용과 관련된 분야를 선택해주세요. 참여자들이 청원 목록
                  내 카테고리 필터를 통해 접근할 수 있습니다.
                </Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" fontSize="16px">
                  Step 4. 내용 입력
                </Heading>
                <Container m="15px" lineHeight={'160%'} pl="0">
                  사람들이 쉽게 읽고 이해할 수 있는 내용으로 작성해주시면
                  됩니다. 글자 수 제한은 없습니다.
                </Container>
              </ListItem>
              <ListItem>
                <Heading as="h2" fontSize="16px">
                  Step 5. 검토 및 게시
                </Heading>
                <Container m="15px" lineHeight={'160%'} pl="0">
                  한번 작성된 청원은 수정 및 삭제가 불가능합니다. 최초 청원
                  취지와 다른 내용으로 변경되는 것을 방지하여 청원 참여자의
                  의견을 보호하기 위한 조치이니 신중하게 게시해주시기 바랍니다.
                </Container>
              </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default GuideModal

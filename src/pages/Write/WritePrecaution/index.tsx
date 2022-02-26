import { Heading, Container, OrderedList, ListItem } from '@chakra-ui/react'
import { StylePrecaution, StyleStrong, PrincipleContents } from './styles'

const WritePrecaution = (): JSX.Element => {
  return (
    <>
      <Heading fontSize="20px" pl={{ base: 0, sm: '18px' }}>
        GIST 청원 게시판 운영 원칙
      </Heading>
      <StylePrecaution p={{ base: '18px 0', sm: '18px' }}>
        <OrderedList spacing={6} fontSize={{ base: '14px', md: '16px' }}>
          <ListItem>
            <PrincipleContents>
              타인의 권리를 침해하거나 명예를 훼손하는 내용은 제한합니다.
              방송통신심의위원회의 &apos;정보통신에 관한 심의 규정&apos;&sbquo;
              한국인터넷자율정책기구의 &apos;정책규정&apos; 등을 기반으로 문제
              게시물은 삭제될 수 있습니다. 자극적이고 혐오스러운 내용&sbquo;
              비속어&sbquo; 폭력적 내용&sbquo; 특정 대상을 비하하거나 차별을
              조장하는 내용&sbquo; 개인정보 유출을 비롯해 타인의 권리를 침해하는
              내용&sbquo; 반복되는 내용&sbquo; 허위사실 등은{' '}
              <StyleStrong>삭제나 숨김</StyleStrong> 처리될 수 있습니다.
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
              한 번 작성된 청원은{' '}
              <StyleStrong>수정 및 삭제가 불가능</StyleStrong>
              합니다. 최초 청원 취지와 다른 내용으로 변경되는 것을 방지하여 청원
              참여자의 의견을 보호하기 위한 조치이니 신중하게 작성하여 주시기
              바랍니다.
            </PrincipleContents>
          </ListItem>
          <ListItem>
            <PrincipleContents>
              동일한 내용으로 <StyleStrong>중복 게시</StyleStrong>된 청원은 가장
              동의수가 많은 청원만 남기고 <StyleStrong>삭제</StyleStrong>될 수
              있습니다.
            </PrincipleContents>
          </ListItem>
        </OrderedList>
      </StylePrecaution>
    </>
  )
}
export default WritePrecaution

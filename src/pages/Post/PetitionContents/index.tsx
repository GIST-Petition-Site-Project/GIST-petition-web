import { chakra, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import { FaFileSignature } from 'react-icons/fa'
import {
  PetitionProgress,
  PetitionTitleWrap,
  PetitionTitle,
  CurrentAgreementsText,
  CurrentAgreements,
  PetitionDescription,
  AgreementButton,
} from './styles'
const CFaFileSignature = chakra(FaFileSignature)

function PetitionContents() {
  return (
    <>
      <Stack spacing={6} color={'#333'}>
        <PetitionProgress>
          <Text fontWeight={'bold'} display={'inline-block'}>
            청원진행중&nbsp;
          </Text>
          <Text display={'inline'}>(2022-01-30 ~)</Text>
        </PetitionProgress>
        <PetitionTitleWrap>
          <PetitionTitle ml={'20px'} mr={'20px'}>
            가나다라. 마바사 아자차카. 타파하. 아야어여 오요우유 바사 아자차카.
          </PetitionTitle>
        </PetitionTitleWrap>
        <CurrentAgreementsText>
          <Text>
            총 <CurrentAgreements>30</CurrentAgreements>
            명이 동의했습니다.
          </Text>
        </CurrentAgreementsText>
      </Stack>
      <Stack color={'#333'} mt={'20px'} mb={'20px'} spacing={4}>
        <Text fontSize={'20px'} fontWeight={'bold'} align={'left'}>
          청원내용
        </Text>
        <Divider color={'#ccc'}></Divider>
        <PetitionDescription>
          해당 드라마는 방영 전 이미 시놉시스 공개로 한차례 민주화운동을
          폄훼하는 내용으로 큰 논란이 된 바 있으며 20만명 이상의 국민들이 해당
          드라마의 방영 중지 청원에 동의하였습니다. 당시 제작진은 전혀 그럴
          의도가 없으며 “남녀 주인공이 민주화 운동에 참여하거나 이끄는 설정은
          대본 어디에도 존재하지 않는다.” 라고 주장했습니다. 그러나 1화가 방영된
          현재 드라마에서 여주인공은 간첩인 남주인공을 운동권으로 오인해
          구해주었습니다.
          <br />
          <br />
          민주화운동 당시 근거없이 간첩으로 몰려서 고문을 당하고 사망한 운동권
          피해자들이 분명히 존재하며 이러한 역사적 사실에도 불구하고 저런 내용의
          드라마를 만든 것은 분명히 민주화운동의 가치를 훼손시키는 일이라고
          생각합니다. 뿐만 아니라 간첩인 남자주인공이 도망가며, 안기부인 서브
          남주인공이 쫓아갈 때 배경음악으로 ‘솔아 푸르른 솔아’ 가 나왔습니다. 이
          노래는 민주화운동 당시 학생운동 때 사용되었던 노래이며 민주화운동을
          수행하는 사람들의 고통과 승리를 역설하는 노래입니다. 그런 노래를
          1980년대 안기부를 연기한 사람과 간첩을 연기하는 사람의 배경음악으로
          사용한 것 자체가 용인될 수 없는 행위입니다. 뿐만 아니라 해당 드라마는
          ott서비스를 통해 세계 각 국에서 시청할 수 있으며 다수의 외국인에게
          민주화운동에 대한 잘못된 역사관을 심어줄 수 있기에 더욱 방영을
          강행해서는 안 된다고 생각합니다.
          <br />
          <br />
          한국은 엄연한 민주주의 국가이며 이러한 민주주의는 노력없이 이루어진
          것이 아닌, 결백한 다수의 고통과 희생을 통해 쟁취한 것입니다. 이로부터
          고작 약 30년이 지난 지금, 민주화운동의 가치를 훼손하는 드라마의 방영은
          당연히 중지되어야 하며 한국문화의 영향력이 점차 커지고 있는 현
          시점에서 방송계 역시 역사왜곡의 심각성에 대해 다시 한번 생각해 봤으면
          합니다.
        </PetitionDescription>
      </Stack>
      <div>
        <AgreementButton colorScheme={'none'} _focus={{ outline: 'none' }}>
          <Flex>
            <CFaFileSignature />
            <Text>&nbsp;동의하기</Text>
          </Flex>
        </AgreementButton>
      </div>
    </>
  )
}

export default PetitionContents

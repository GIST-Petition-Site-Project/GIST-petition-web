import { CheckIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  Divider,
} from '@chakra-ui/react'
import { memo } from 'react'
import { Container, TermsOfUseCheckIcon } from './styles'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const TermsOfUseAccordion = memo(
  ({ agreeInfo, onClick }: RegisterTermsOfUseBtn) => {
    const t = useTranslate(locale)

    return (
      <Container>
        <Accordion allowToggle>
          <AccordionItem>
            <div className="btn_wrapper">
              <TermsOfUseCheckIcon
                onClick={onClick}
                aria-label="Call Segun"
                icon={<CheckIcon />}
                data-value="service"
                isclicked={agreeInfo.service ? 'true' : 'false'}
              />
              <AccordionButton>
                <div>{t('termsOfUse')}</div>
                <AccordionIcon />
              </AccordionButton>
            </div>
            <AccordionPanel pb={4} fontSize={'14px'}>
              <ul>
                <li>
                  <div className="subheading">제1장 총칙</div>
                  <div className="contents">
                    제1조(목적)
                    <br />
                    지스트 청원 이용약관(이하 "본 약관"이라 한다)은 지스트
                    Better IT팀 (이하 "Better IT팀"이라 한다) 지스트 청원 및
                    온라인 서비스(이하 "서비스"라 한다) 이용과 관련하여 Better
                    IT팀과 이용자의 권리·의무·책임사항과 기타 필요한 사항을
                    규정함을 목적으로 합니다.
                  </div>
                  <div className="contents">
                    제2조(정의)
                    <br />본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    <div className="indentation">
                      1. "사용자"란 지스트 청원에 접속하여 본 약관에 따라 Better
                      IT팀이 제공하는 서비스를 이용하는 회원 및 비회원을
                      말합니다.
                      <br />
                      2. "회원"이란 지스트 청원의 가입 신청 절차에 따라 회원
                      등록을 한 자로서 지스트 청원의 정보 및 서비스를 계속적으로
                      이용할 수 있는 자를 말합니다.
                      <br />
                      3. "본인확인"이란 지스트 청원이 제공하는 서비스 이용을
                      위하여 광주과학기술원 이메일(@gist.ac.kr 과
                      @gm.gist.ac.kr)을 통한 인증으로 본인임을 확인하는 것을
                      말합니다.
                    </div>
                  </div>
                  <div className="contents">
                    제3조(약관의 효력과 개정)
                    <br />
                    &#9312; 본 약관은 지스트 청원 서비스 화면에 공지함으로써
                    이용자 에게 공시하고, 본 약관에 동의한 이용자가 회원에
                    가입함으로써 효력이 발생하며, 청원 홈페이지의 서비스 제공
                    행위 및 이용자의 서비스 사용 행위에 본 약관이 우선적으로
                    적용됩니다.
                    <br />
                    &#9313; Better IT팀은 필요한 경우 이 약관의 내용을 변경할 수
                    있으며, 변경된 약관은 청원 홈 페이지 서비스 화면에
                    공지함으로써 이용자가 직접 확인할 수 있도록 합니다.
                    <br />
                    &#9314; 회원은 개정된 약관에 동의하지 않을 경우 회원 탈퇴할
                    수 있으며, 명시적으로 거부의 의사표시를 하지 아니하고 계속
                    사용하는 경우에는 약관 변경에 동의한 것으로 간주됩니다.
                    <br />
                    &#9315; 본 약관에 명시되지 않은 사항에 대해서는
                    「전기통신사업법」, 「정보통신망 이용촉진 및 정보보호 등에
                    관한 법률」, 「개인정보 보호법」 등 관련 법령의 규정에
                    따릅니다.
                  </div>
                </li>
                <li>
                  <div className="subheading">제2장 서비스 제공 및 이용</div>
                  <div className="contents">
                    제4조(회원 가입)
                    <br />
                    &#9312; 지스트 청원 회원에 가입하고자 하는 이용자는 지스트
                    청원 홈페이지의 회원 가입 신청 절차에 따라 본인확인을 거쳐
                    본 이용약관 및 개인정보처리방침 등에 "동의" 여부를 표시하고,
                    개인정보를 기재함으로써 회원에 가입합니다.
                  </div>
                  <div className="contents">
                    제5조(회원 탈퇴 및 자격 상실)
                    <br />
                    &#9312; 회원은 언제든지 회원 탈퇴를 할 수 있으며 Better
                    IT팀은 지체 없이 회원 탈퇴를 처리하고, 해당 개인정보를
                    파기합니다.
                  </div>
                  <div className="contents">
                    제6조(서비스의 제공 및 변경)
                    <br />
                    &#9312; 지스트 청원은 이용자에게 다음과 같은 서비스를
                    제공합니다.
                    <div className="indentation">
                      1. 온라인 상의 민원 처리 서비스
                    </div>
                  </div>
                  <div className="contents">
                    제7조(서비스의 중단)
                    <br />
                    &#9312; 지스트 청원은 정보시스템, 서버, 정보기기, 네트워크의
                    점 검·교체 및 장애발생 등의 사유가 발생한 경우에는 서비스의
                    제공을 일시적으로 중단할 수 있습니다. 또한, 운영상 상당한
                    이유가 있는 경우 현재 제공되는 서비스를 새로운 서비스로 교체
                    또는 중단할 수 있습니다.
                    <br />
                    &#9313; 제1항에 의한 서비스 중단의 경우에는 Better IT팀은
                    제8조 제2항에서 정한 방법으로 이용자에게 통지합니다. 다만,
                    Better IT팀이 통제할 수 없는 사유로 인한 서비스의
                    중단(시스템 관리자의 고의·과실이 없는 정보시스템, 서버,
                    정보기기, 네트워크의 장애발생 등)으로 인하여 사전 통지가
                    불가능한 경우에는 그러하지 아니합니다.
                  </div>
                  <div className="contents">
                    제8조(이용자에 대한 통지)
                    <br />
                    &#9312; Better IT팀이 특정 이용자에 대한 통지를 하는 경우
                    이용자가 회원 가입 시에 기재한 메일주소로 할 수 있습니다.
                    <br />
                    &#9313; Better IT팀이 불특정다수 이용자에 대한 통지를 하는
                    경우 지스트 청원 게시판 및 서비스 화면에 게시함으로써 개별
                    통지에 갈음할 수 있습니다.
                  </div>
                  <div className="contents">
                    제9조(개인정보보호)
                    <br />
                    &#9312; Better IT은 「개인정보 보호법」등 관련 법령, 지스트
                    청원 개인정보보호에 관한 규정 및 Better IT팀의
                    개인정보처리방침이 정하는 바에 따라 이용자의 개인정보를
                    보호하기 위하여 노력합니다. 다만, Better IT팀이 운영하는
                    홈페이지에 포함된 링크 또는 배너를 클릭하여 다른 사이트로
                    옮겨갈 경우에는 해당 사이트의 개인정보보호방침 에 따릅니다.
                    <br />
                    &#9313; 지스트 청원은 회원 정보를 다음과 같이 처리합니다.
                    <div className="indentation">
                      1. 개인정보의 수집 및 이용 : 지스트 청원은 회원가입 시,
                      필요한 범위 내에서 이용자 본인의 동의를 받아 최소한의
                      개인정보를 수집합니다. 또한, 민감정보·고유식별정보의
                      수집이 필요한 경우에는 각각을 구분하여 별도의 동의를 받아
                      처리합니다.
                      <br />
                      2. 개인정보의 목적 외 이용 및 제3자 제공 : 지스트 청원은
                      수집된 회원의 개인 정보를 제2항 제1호의 목적 범위 내에서
                      이용하며, 이용자 본인의 동의 없이 본래의 목적을 초과하여
                      처리하거나 제3자에게 제공하지 않습니다.
                    </div>
                    &#9314; 회원은 개인정보 관리화면을 통하여 언제든지 본인의
                    개인정보를 열람·수정·삭제할 수 있습니다.
                    <br />
                    &#9315; 회원은 회원 가입 신청 시 기재한 사항에 변경이 발생한
                    경우, 변경사항을 수정하여 기재하여야 합니다. 회원이
                    변경사항을 수정 기재하지 않아 발생한 불이익에 대하여 Better
                    IT 팀은 책임지지 않습니다.
                  </div>
                  <div className="contents">
                    제10조(Better IT팀의 의무)
                    <br />
                    &#9312; Better IT팀은 관련 법령과 본 약관이 정하는 바에 따라
                    지속적이고, 안정적으로 서비스를 제공하기 위해서 노력합니다.
                    <br />
                    &#9313; Better IT팀은 이용자가 안전하게 인터넷 서비스를
                    이용할 수 있도록 개인정보의 안전성 확보에 필요한
                    기술적·관리적 및 물리적 보안 조치를 취합니다.
                  </div>
                  <div className="contents">
                    제11조(이용자의 ID 및 비밀번호에 대한 의무)
                    <br />
                    &#9312; 이용자의 ID와 비밀번호에 관한 관리책임은 이용자에게
                    있습니다. 다만, Better IT팀이 개인정보보호법 등 관계 법령에
                    의하여 책임을 지는 경우는 제외합니다.
                    <br />
                    &#9313; 이용자는 자신의 ID 및 비밀번호를 제3자에게 이용하게
                    해서는 안 되며, 작업 종료 시에 는 반드시 로그아웃하고,
                    웹브라우저의 창을 닫아야 합니다.
                    <br />
                    &#9314; 이용자는 자신의 ID 및 비밀번호가 도용되거나 제3자가
                    사용하고 있음을 인지한 경우에 는 바로 Better IT팀에 통보하고
                    Better IT팀의 안내가 있는 경우에는 그에 따라야 합니다.
                  </div>
                  <div className="contents">
                    제12조(이용자의 의무)
                    <br />
                    &#9312; 이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
                    <div className="indentation">
                      1. 신청 또는 변경 시 허위 내용을 등록하는 행위
                      <br />
                      2. 타인의 명의를 도용하여 부정사용하는 행위
                      <br />
                      3. Better IT팀의 일원이거나 광주과학기술원 청원 서비스의
                      관리자를 가장하거나 사칭하는 행위
                      <br />
                      4. 지스트 청원에 게시된 정보를 변경하는 행위
                      <br />
                      5. 다른 이용자에 대한 개인정보를 수집·저장·공개하는 행위
                      <br />
                      6. 외설 또는 폭력적·위협적인 메시지·화상·음성·기타
                      공서양속에 반하는 정보를 메일로 송신하거나 공개 또는
                      게시하는 행위
                      <br />
                      7. 사생활 침해 또는 명예훼손 등 타인의 권리를 침해하는
                      정보를 유통시키는 행위
                      <br />
                      8. Better IT 또는 타인의 지적재산권을 침해하거나 업무를
                      방해하는 행위
                      <br />
                      9. 컴퓨터 소프트웨어·하드웨어·네트워크 등의 정상적인
                      가동을 방해, 파괴할 목적으로 고안 된 소프트웨어
                      바이러스·기타 다른 컴퓨터 코드·파일·프로그램을 포함하고
                      있는 자료를 게시하 거나 전자우편으로 발송하는 행위
                      <br />
                      10. 불특정 다수를 대상으로 하여 광고 또는 선전을
                      게시하거나 스팸메일을 전송하는 등의 행위
                      <br />
                      11. 지스트 청원의 이용 약관을 위반하는 행위
                      <br />
                      12. 기타 관련 법령에 의하여 그 전송 또는 게시가 금지되는
                      정보를 전송 또는 게시하는 행위
                      <br />
                    </div>
                    &#9313; 제1항에 해당하는 행위를 한 이용자가 있을 경우 Better
                    IT팀은 이용자의 회원자격을 적정한 방법으로 제한, 정지 또는
                    상실시킬 수 있습니다.
                    <br />
                    &#9314; 이용자는 그 귀책사유로 인하여 Better IT팀이나 다른
                    이용자가 입은 손해를 배상할 책임이 있습니다.
                  </div>
                  <div className="contents">
                    제13조(공개 게시물의 삭제 등)
                    <br />
                    &#9312; 이용자가 게재한 공개 게시물의 내용이 다음 각호에
                    해당하는 경우 지스트 청원은 이용자에게 사전 통지 없이 해당
                    공개 게시물을 삭제할 수 있고, 해당 이용자의 회원 자격을
                    제한, 정지 또는 상실시킬 수 있습니다.
                    <div className="indentation">
                      1. 욕설이나 음란한 부호·문언·음향·화상 또는 영상을
                      배포·판매·임대하거나 공공연하게 전시 하는 내용
                      <br />
                      2. 사람을 비방할 목적으로 공공연하게 사실이나 거짓의
                      사실을 드러내어 타인의 명예를 훼손하는 내용
                      <br />
                      3. 공포심이나 불안감을 유발하는 부호·문언·음향·화상 또는
                      영상을 반복적으로 상대방에게 도달하도록 하는 내용
                      <br />
                      4. 정당한 사유 없이 정보통신시스템, 데이터 또는 프로그램
                      등을 훼손·멸실·변경·위조하거나 그 운용을 방해하는 내용
                      <br />
                      5. 「청소년 보호법」에 따른 청소년유해매체물을 게재 또는
                      광고하는 내용
                      <br />
                      6. 법령에 따라 금지되는 사행행위에 해당하는 내용
                      <br />
                      7. 법령에 따라 분류되는 비밀 등 국가기밀을 누설하는 내용
                      <br />
                      8.「국가보안법」에서 금지하는 행위를 수행하는 내용
                      <br />
                      9. 그 밖에 범죄를 목적으로 하거나 교사 또는 방조하는 내용
                      <br />
                      11. 기타 관련 법령에 위배된다고 판단되는 내용
                    </div>
                    &#9313; 공개게시물의 내용으로 인하여 사생활 침해나 명예훼손
                    등 타인의 권리가 침해된 경우 그 침해를 받은 자는 Better
                    IT팀에게 침해사실을 소명하여 그 정보의 삭제를 요청할 수 있습
                    니다.
                    <br />
                    &#9314; Better IT팀은 제2항에 따른 요청을 받으면 지체 없이
                    삭제·임시조치 등의 필요한 조치를 하고, 즉시 신청인 및 정보
                    게시자에게 알리는 한편, 필요한 조치를 취한 사실을 해당 게
                    시판에 공시하는 등의 방법으로 이용자가 알 수 있도록 합니다.
                    <br />
                    &#9315; Better IT팀은 제2항에 따른 정보의 삭제요청에도
                    불구하고, 권리의 침해 여부를 판단하기 어렵거나 이해당사자
                    간에 다툼이 예상되는 경우에는 해당 정보에 대한 접근을
                    임시적으로 차단하는 조치(이하 "임시조치"라 한다)를 할 수
                    있습니다. 이 경우 임시조치의 기간은 30일 이내로 합니다.
                  </div>
                  <div className="contents">
                    제16조(면책조항)
                    <br />
                    &#9312; Better IT팀은 천재지변 또는 이에 준하는 불가항력으로
                    인하여 서비스 를 제공할 수 없는 경우에는 서비스 제공에 관한
                    책임이 면제됩니다.
                    <br />
                    &#9313; Better IT팀은 회원의 귀책사유로 인한 서비스 이용의
                    장애에 대하여 책임을 지지 않습 니다.
                    <br />
                    &#9314; Better IT팀은 회원이 서비스를 이용하여 기대하는
                    이익이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여
                    책임을 지지 않습니다.
                    <br />
                    &#9315; Better IT팀은 회원이 서비스에 게재한 정보, 자료,
                    사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지
                    않습니다.
                  </div>
                </li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <Divider orientation="horizontal" />
          <AccordionItem>
            <div className="btn_wrapper">
              <TermsOfUseCheckIcon
                onClick={onClick}
                aria-label="Call Segun"
                icon={<CheckIcon />}
                data-value="private"
                isclicked={agreeInfo.private ? 'true' : 'false'}
              />
              <AccordionButton>
                <div>{t('privacy')}</div>
                <AccordionIcon />
              </AccordionButton>
            </div>
            <AccordionPanel fontSize={'14px'}>
              <ul>
                <li>
                  <div className="subheading">가. 수집·이용 목적</div>
                  <div className="contents">
                    * 지스트 청원은 다음 목적을 위해서 개인 정보를 수집하며,
                    수집된 개인정보는 정해진 목적 이외의 용도로는 이용되지
                    않습니다.
                    <br />
                    1. 지스트 청원 회원 가입 및 관리 회원 가입 의사 확인, 회원제
                    서비스 또는 제한적 본인 확인제에 따른 본인확인, 개인식별,
                    부정이용방지
                    <br />* 수집 목적, 수집 항목, 개인정보의 보유·이용기간, 동의
                    거부권·동의 거부에 따른 불이익 내용이 변경될 경우
                    개인정보보호법에 따라 사전에 알리고 동의를 받아
                    처리하겠습니다.
                  </div>
                </li>
                <li>
                  <div className="subheading">나. 수집하는 개인정보 항목</div>
                  <div className="contents">
                    - 필수항목 : 이메일
                    <br />
                    * 서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어
                    수집될 수 있습니다.
                    <br />- 방문일시, 서비스 이용기록
                  </div>
                </li>
                <li>
                  <div className="subheading">다. 보유·이용기간</div>
                  <div className="contents">* 회원 탈퇴 시까지</div>
                </li>
                <li>
                  <div className="subheading">
                    라. 개인정보 수집 동의 거부의 권리
                  </div>
                  <div className="contents">
                    * 귀하는 개인정보 수집 및 이용에 동의하지 않을 권리가
                    있습니다. 다만 동의를 하지 않을 경우에는 지스트 청원의 회원
                    계정을 사용하는 정상적인 서비스의 제공이 불가능할 수 있음을
                    알려드립니다.
                  </div>
                </li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    )
  },
)

export default TermsOfUseAccordion

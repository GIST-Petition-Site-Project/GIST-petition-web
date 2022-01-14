import styled from '@emotion/styled'
import theme from '../../../style/theme'

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.innerMaxWidth};
  height: 100%;
`
const StyledDiv3 = styled.div`
  padding: 2.5rem 0;
  margin-top: 0;
  color: white;
  background-color: #dd433b;
  /* shadow: md; */
  position: relative;
`
const CollapseInner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 62.5rem;
  height: 100%;
  transition: 0.5s 0.5s;
`

const Precaution = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${theme.color.primaryRed} 50%,
    ${theme.color.tertiaryGray} 50%
  );
  /* 반은 빨간색, 반은 회색으로 설정해줍니다. */
  /* 이 방식이 제일 간단한 것 같아요! */
`

export { Inner, StyledDiv3, CollapseInner, Precaution }

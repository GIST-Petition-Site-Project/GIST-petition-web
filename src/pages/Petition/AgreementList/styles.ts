import styled from '@emotion/styled'

const AgreementItem = styled.li`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1em 0.2em;
  margin-top: -1px;
  text-align: left;
`
const AgreementAnonymousName = styled.div`
  font-weight: bold;
`
const AgreementCreatedAt = styled.div`
  font-size: 0.75rem;
  color: #555;
`
const ContentWrap = styled.div`
  white-space: pre-line;
`

export {
  AgreementItem,
  AgreementAnonymousName,
  AgreementCreatedAt,
  ContentWrap,
}

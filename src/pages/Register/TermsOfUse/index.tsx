import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TermsOfUseAccordion from '../Accordion'
import TermOfUseList from './TermOfUseList'
import { setAgree } from '@redux/register/registerSlice'
import { RootState } from '@redux/store'
import { TermsOfUseBox } from './styles'

const TermsOfUse = memo((): JSX.Element => {
  const agreeInfo = useSelector((state: RootState) => state.register.agreeInfo)
  const dispatch = useDispatch()

  const handleAgree = (value: string) => {
    switch (value) {
      case 'total':
        if (agreeInfo.private && agreeInfo.service) {
          dispatch(setAgree('Total'))
          return
        } else if (agreeInfo.private || agreeInfo.service) {
          !agreeInfo.service && dispatch(setAgree('Service'))
          !agreeInfo.private && dispatch(setAgree('Private'))
          return
        }
        dispatch(setAgree('Total'))
        return
      case 'service':
        dispatch(setAgree('Service'))
        return
      case 'private':
        dispatch(setAgree('Private'))
        return
      default:
        throw Error('Clicked Wrong Btn')
    }
  }

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget
    const value = target.dataset.value
    value && handleAgree(value)
  }, [])

  return (
    <TermsOfUseBox>
      <TermOfUseList onClick={handleClick}></TermOfUseList>
      <TermsOfUseAccordion onClick={handleClick}></TermsOfUseAccordion>
    </TermsOfUseBox>
  )
})

export default TermsOfUse

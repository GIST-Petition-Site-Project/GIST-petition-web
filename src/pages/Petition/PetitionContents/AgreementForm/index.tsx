import { FormControl } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { postAgreePetition } from '@api/petitionAPI'
import { SAgreementForm } from './styles'
import { useNavigate } from 'react-router-dom'
import { useAppSelect } from '@redux/store.hooks'

interface IProps {
  id: string
  isConsented: boolean
}

const AgreementForm = ({ id, isConsented }: IProps): JSX.Element => {
  const isAuthorized = useAppSelect(select => select.auth.isAuthorized)
  const [input, setInput] = useState<AgreePetition>({
    description: '동의합니다',
  })

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({ description: e.target.value.replace(/ +/g, ' ') })
  }, [])

  const navigate = useNavigate()
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await postAgreePetition(id, input)
      } catch (error) {
        console.log(error)
      }
      navigate(0)
    },
    [input],
  )

  return (
    <SAgreementForm>
      <span>{input.description.length}/100</span>
      <form onSubmit={handleSubmit}>
        <FormControl>
          {isAuthorized ? (
            <div className="wrapper">
              <textarea
                placeholder={isConsented ? '동의했습니다' : '동의합니다'}
                onChange={handleChange}
                value={input.description}
                maxLength={100}
                disabled={isConsented}
              />
              <button
                className="agreement_btn"
                disabled={isConsented}
                type="submit"
              >
                {!isConsented ? '동의하기' : '동의완료'}
              </button>
            </div>
          ) : (
            <div
              className="needLogin"
              onClick={_e => {
                navigate({
                  pathname: '/login',
                  hash: 'prev',
                })
              }}
            >
              동의하려면&nbsp;<span>로그인</span>&nbsp;해주세요
            </div>
          )}
        </FormControl>
      </form>
    </SAgreementForm>
  )
}

export default AgreementForm

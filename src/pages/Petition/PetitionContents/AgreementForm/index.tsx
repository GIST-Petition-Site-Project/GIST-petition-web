import { FormControl, useDisclosure } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { getStateOfAgreement, postAgreePetition } from '@api/petitionAPI'
import { SAgreementForm } from './styles'
import { useNavigate } from 'react-router-dom'
import NeedLoginModal from '@components/NeedLoginModal'

const AgreementForm = ({ petitionId }: PetitionId): JSX.Element => {
  const [input, setInput] = useState<AgreePetition>({
    description: '동의합니다.',
  })
  const [isConsented, setIsConsented] = useState<boolean>(true)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({ description: e.target.value.replace(/ +/g, ' ') })
  }

  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await postAgreePetition(petitionId, input)
      if (response?.status === 401) {
        onOpen()
      } else if (response.status < 400) {
        navigate(0)
        setIsConsented(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetch = async (id: string) => {
    try {
      const response = await getStateOfAgreement(id)
      if (response.status < 400) {
        setIsConsented(response.data)
      }
      if (response.status >= 400) {
        setIsConsented(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch(petitionId)
  }, [petitionId])

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <SAgreementForm>
      <span>{input.description.length}/100</span>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <div className="wrapper">
            <textarea
              placeholder="동의합니다."
              onChange={handleChange}
              value={input.description}
              maxLength={100}
            />
            <button
              className="agreement_btn"
              disabled={isConsented}
              type="submit"
            >
              {!isConsented ? '동의하기' : '동의완료'}
            </button>
          </div>
        </FormControl>
      </form>
      <NeedLoginModal disclosure={{ isOpen, onClose }}></NeedLoginModal>
    </SAgreementForm>
  )
}

export default AgreementForm

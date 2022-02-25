import { CommentList } from './styles'
import { useEffect, useState } from 'react'
import { getAgreements } from '@api/petitionAPI'

interface IProps {
  petitionId: string
}

const AgreementList = ({ petitionId }: IProps): JSX.Element => {
  const [response, setResponse] = useState<Array<GetAgreements>>([])
  const fetch = async () => {
    try {
      const response = await getAgreements(petitionId)
      setResponse(response?.data?.content || [])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetch()
  }, [petitionId])

  console.log(response)

  return (
    <CommentList>
      <ul>
        {response.map((res, index) => (
          <li key={res.id}>
            <div className="comment">
              <div className="anonymous">
                <div>익명{response.length - index}</div>
              </div>
              <div className="content">
                <div>{res.description}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </CommentList>
  )
}
export default AgreementList

import { NotFoundSection } from './styles'
import notFound from '../../assets/img/not_found.gif'

const NotFound = (): JSX.Element => {
  return (
    <NotFoundSection>
      <div>
        <img alt="logo" src={notFound} />
      </div>
      <div className="message">
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <p>페이지가 존재하지 않거나, 더 이상 사용할 수 없는 페이지입니다.</p>
        <div className="error-btns">
          <a
            className="previous-btn err-btn"
            href="javascript:history.go(-1)"
          ></a>
          <a className="main-btn err-btn" href="/"></a>
        </div>
      </div>
    </NotFoundSection>
  )
}

export default NotFound

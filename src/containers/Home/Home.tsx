import MainImg from '../../assets/img/gist_summer.jpg'

const Home = (): JSX.Element => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          backgroundImage: `url(${MainImg})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      ></div>
    </div>
  )
}

export default Home

// import logo from '@assets/img/new_logo.svg'
import logo from '@assets/img/new_logo_black.svg'
import { ReactComponent as MobMenuIcon } from '@assets/img/menu_icon.svg'
import { Header, Logo, TopMenu, ItemName, MobMenuButton } from './styles'
import { useState } from 'react'
import { Divider, ListItem } from '@chakra-ui/react'
import MyMenu from './MyMenu'
import { Link } from 'react-router-dom'
import Inner from '@components/Inner'
import { useAppDispatch, useAppSelect } from '@redux/store.hooks'
import { toggleLang } from '@redux/lang/langSlice'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'
import { MdTranslate } from 'react-icons/md'

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false)
  const isAuthorized = useAppSelect(select => select.auth.isAuthorized)
  const writePathname = isAuthorized ? '/write' : '/login#/write'

  const closeMenu = () => {
    if (opened) {
      setOpened(!opened)
    }
  }
  const dispatch = useAppDispatch()

  const handleLangChange = () => {
    dispatch(toggleLang())
  }

  const t = useTranslate(locale)

  return (
    <Header>
      <Inner>
        <Logo>
          <Link to="/" onClick={closeMenu}>
            <img alt="logo" src={logo} />
          </Link>
        </Logo>
        <TopMenu open={opened}>
          <div onClick={closeMenu}>
            <ListItem>
              <ItemName>
                <Link to="/guide">{t('about')}</Link>
              </ItemName>
            </ListItem>
            <ListItem>
              <ItemName>
                <Link to={writePathname}>{t('petition')}</Link>
              </ItemName>
            </ListItem>
            <ListItem>
              <ItemName>
                <Link to="/petitions">{t('all')}</Link>
              </ItemName>
            </ListItem>
            <ListItem>
              <ItemName>
                <Link to="/answer">{t('answered')}</Link>
              </ItemName>
            </ListItem>
            <ListItem>
              <ItemName className="translate-btn">
                <div onClick={handleLangChange}>
                  <MdTranslate />
                </div>
              </ItemName>
            </ListItem>
            <Divider></Divider>
            <ListItem>
              <MyMenu />
            </ListItem>
          </div>
        </TopMenu>
        <MobMenuButton
          onClick={() => {
            setOpened(!opened)
          }}
          open={opened}
        >
          <MobMenuIcon />
        </MobMenuButton>
        <div className="translate-btn__mob" onClick={handleLangChange}>
          <MdTranslate />
        </div>
      </Inner>
    </Header>
  )
}

export default NavBar

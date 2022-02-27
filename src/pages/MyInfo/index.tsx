import React, { FormEvent, useRef, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import MyInfoList from './MyInfoList'
import MyInfoItem from './MyInfoList'

const MyInfo = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = (text: string) => {
    text === '비밀번호 변경'
      ? navigate('/changepassword')
      : navigate('/withdrawal')
  }

  return (
    <Container className="register">
      <Stack spacing={4}>
        <span className="title">회원 정보 변경 </span>
        <ul className="MyInfo_List">
          <MyInfoItem
            text="비밀번호 변경"
            onNavigate={handleClick}
          ></MyInfoItem>
          <MyInfoItem text="회원 탈퇴" onNavigate={handleClick}></MyInfoItem>
        </ul>
      </Stack>
    </Container>
  )
}

export default MyInfo

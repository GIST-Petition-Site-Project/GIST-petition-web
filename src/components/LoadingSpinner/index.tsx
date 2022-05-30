import { Flex, Spinner } from '@chakra-ui/react'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const LoadingSpinner = () => {
  const t = useTranslate(locale)

  return (
    <Flex flexDirection="column" alignItems="center">
      <Spinner
        m="auto"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#df3127"
        size="xl"
        mb="10px"
      />
      {t('wait')}
    </Flex>
  )
}

export default LoadingSpinner

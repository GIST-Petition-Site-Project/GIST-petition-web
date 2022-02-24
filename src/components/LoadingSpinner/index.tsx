import { Flex, Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
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
      잠시만 기다려주세요...
    </Flex>
  )
}

export default LoadingSpinner

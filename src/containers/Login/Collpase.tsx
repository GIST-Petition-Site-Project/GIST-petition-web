import { useDisclosure, Button, Collapse, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Test = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
`
function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div>
      <Test>
        <Button onClick={onToggle}>Click Me</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            aodrnsms <br />
            soclsrnfka;fk;alkf;kv
            <br />
            s;fk;asdk;fk;f
            <br />
            s;kf;lask;skf;sak;lafkd
            <br />
            salkfjlsa
            <br />
            kjflsajflksa
            <br />
            djlfajsf afkj
            <br />
            asljflkas
            <br />
            jflasdj
            <br />
            lfjlkajfljlaksf af
            <br />
            skjfljaslkf
            <br />
            jlsadjlfk
            <br />
            sadjflksajlfdsa
            <br />
            <br />
            <br />
          </Box>
        </Collapse>
      </Test>
    </div>
  )
}

export default CollapseEx

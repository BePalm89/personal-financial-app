import { ChakraProvider, Button } from '@chakra-ui/react'
import './styles/app.scss'
function App() {

  return (
    <ChakraProvider>
      <Button colorScheme='blue'>Button</Button>
      <div className='test'>Hola</div>
    </ChakraProvider>
  )
}

export default App

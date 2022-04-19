import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import { Nav } from '/b/'
import Home from './pages/Home'

export default function App() {
  return (
    <Container maxW="container.2xl" p={0} bg="white">
      <Box>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Container>
  )
}

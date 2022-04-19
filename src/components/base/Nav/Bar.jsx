import { HStack, Flex, Spacer } from '@chakra-ui/react'

export default function Bar({ brand, children }) {
  return (
    <Flex as="nav" w="full" px={4}>
      {brand}
      <Spacer />
      <HStack align="flex-end" spacing={8}>
        {children}
      </HStack>
    </Flex>
  )
}

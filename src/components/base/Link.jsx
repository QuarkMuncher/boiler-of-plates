import { Link as BaseLink } from '@chakra-ui/react'

export default function Link({ children, ...rest }) {
  return (
    <BaseLink transition="all 150ms ease-in" {...rest}>
      {children}
    </BaseLink>
  )
}

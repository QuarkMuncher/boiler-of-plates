import { Image } from '@chakra-ui/react'

export default function Logo({ src, ...rest }) {
  return <Image src={src} alt="A logo!" h="48px" {...rest} />
}

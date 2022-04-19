import { Link as RouterLink } from 'react-router-dom'
import Link from '/b/Link'

export default function NavLink({ to, children, ...rest }) {
  return (
    <Link
      fontSize="xl"
      lineHeight={4}
      as={RouterLink}
      to={to}
      _hover={{ textDecoration: 'none' }}
      py={2}
      {...rest}
    >
      {children}
    </Link>
  )
}

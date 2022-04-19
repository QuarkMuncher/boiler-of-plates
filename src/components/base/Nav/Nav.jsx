import Bar from './Bar'
import NavLink from './NavLink'

export default function Nav() {
  return (
    <Bar brand={<NavLink to="/">Brand text</NavLink>}>
      <NavLink to="/">Link 1</NavLink>
      <NavLink to="/about">Link 2</NavLink>
    </Bar>
  )
}

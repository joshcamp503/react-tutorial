import { useMode } from '../../hooks/useMode'
import './Navbar.css'

const Navbar = () => {

  const { mode, setMode } = useMode()

  const handleClick = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={`navbar ${mode}`}>
      <ul className="nav-menu">
        <li className="nav-link">About</li>
        <li className="nav-link">Products</li>
        <li className="nav-link">Contact</li>
        <li className="nav-link">Blog</li>
        <button className="mode" onClick={handleClick}>mode</button>
      </ul>
    </nav>
  )
}
export default Navbar
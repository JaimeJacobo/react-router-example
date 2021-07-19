import {Link} from 'react-router-dom'

const Navbar = ()=>{
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </>
  )
}

export default Navbar
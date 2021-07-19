import {Link} from 'react-router-dom'

const Users = (props)=>{
  return (
    <>
      <h1>Users component</h1>
      <ul>
        <li><Link to="/users/1">User 1</Link></li>
        <li><Link to="/users/2">User 2</Link></li>
        <li><Link to="/users/3">User 3</Link></li>
      </ul>
      <h2>{props.routeInfo.match.params.number}</h2>
    </>
  )
}

export default Users
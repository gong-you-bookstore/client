import { useNavigate } from "react-router-dom"

const Nav = ()=>{
  const navigate = useNavigate();


  return (
    <nav className="navbar">
      <h1 className="nav-logo"
        onClick={()=>{navigate("/")}}
      >공 유 책 방</h1>

      <ul className="navbar-menu">                     
        <li className="nav-item">
          <a 
            className="nav-link" 
            onClick={()=>{navigate("/bookstore")}}
          >책방</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" onClick={()=>{navigate("/register")}}>등록</a>
        </li>
        
        
        <li className="nav-item">
          <a className="nav-link"
            onClick={()=>{navigate('/login')}}>login</a>
        </li>
      </ul>
    </nav>


        
    )
}

export default Nav
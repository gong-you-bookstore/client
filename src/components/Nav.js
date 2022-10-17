import { useNavigate } from "react-router-dom"
import $ from 'jquery'

const Nav = ()=>{
  const navigate = useNavigate();

  const menus = [
    {name: "책방", address: "/bookstore"},
    {name: "등록", address: "/register"},
    {name: "커뮤니티", address: "/community"},
    {name: "login", address: "/login"},
  ]

  const onClickHamburger = () => {
    if($('.hamburger').hasClass("active")){
      $('.hamburger').removeClass( 'active' );
      $('.navbar-menu').removeClass( 'active' );
    } else {
      $('.hamburger').addClass( 'active' );
      $('.navbar-menu').addClass( 'active' );
    }
    
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1
          onClick={()=>{navigate("/")}}
        >
          공 유 책 방
        </h1>
      </div>
      
      <div className="hamburger" onClick={()=>onClickHamburger()}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      

      <ul className="navbar-menu">
        {
          menus.map((item, index)=>(
            <li key={index}>
              <a onClick={()=>{navigate(item.address)}}>
                {item.name}
              </a>
            </li>
          ))
        }                   
      </ul>

      
    </nav>


        
    )
}

export default Nav
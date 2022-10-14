import { useNavigate } from "react-router-dom"
import $ from 'jquery'

const Nav = ()=>{
  const navigate = useNavigate();

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
      
      <div class="hamburger" onClick={()=>onClickHamburger()}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      

      <ul className="navbar-menu">                     
        <li>
          <a 
            onClick={()=>{navigate("/bookstore")}}
          >
            책방
          </a>
        </li>
        <li>
          <a 
            onClick={()=>{navigate("/register")}}
          >
            등록
          </a>
        </li>
        <li>
          <a 
            onClick={()=>{navigate('/login')}}
          >
            login
          </a>
        </li>
      </ul>

      
    </nav>


        
    )
}

export default Nav
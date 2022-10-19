import { useNavigate } from "react-router-dom"
import $ from 'jquery'
import logoWhiteImg from './../assets/images/logo_row_white.png'
import logoColorImg from './../assets/images/logo-color.png'

import { useEffect, useState } from "react"

const Nav = ()=>{
  const [isTop, setIsTop] = useState(true)

  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("nav").addClass("non-top");
        setIsTop(false);
    }else{
        $("nav").removeClass("non-top");
        setIsTop(true);
    }
  })

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
        {
          isTop ? (
            <img src={logoWhiteImg} style={{width:"70px"}}></img>
          ) : (
            <img src={logoColorImg} style={{width:"70px"}}></img>
          )
        }

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
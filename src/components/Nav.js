import { useNavigate } from "react-router-dom"
import $ from 'jquery'
import logo from './../assets/images/logo.png'

import logoWhiteImg from './../assets/images/logo_row_white.png'
import logoColorImg from './../assets/images/logo-color.png'
import favicon from './../assets/images/favicon.png'

import { useEffect, useState } from "react"

const Nav = ()=>{
  const [isTop, setIsTop] = useState(true)

  const navigate = useNavigate();

  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("nav").addClass("non-top");
        $(".line").css('background-color', '#333');
        setIsTop(false)
    }else{
        $("nav").removeClass("non-top");
        $(".line").css('background-color', '#fff');
        setIsTop(true)
    }
  })

  const menus = [
    {name: "찾기", address: "/register"},
    {name: "책방", address: "/bookstore"},
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
      <div 
        onClick={()=>{navigate("/");}}
        className="navbar-logo"
        >
        <img src={favicon} style={{width:"40px"}} className="hex-logo"/>
        <img src={logo} style={{width:"60px"}} className="txt-logo"/>
        {/* {
          isTop ? (
            <img src={logo} style={{width:"60px"}}></img>
          ) : (
            <img src={logoColorImg} style={{width:"60px"}}></img>
          )
        } */}
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
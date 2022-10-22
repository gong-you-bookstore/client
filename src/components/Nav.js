import { useLocation, useNavigate } from "react-router-dom"
import $ from 'jquery'
import { useEffect, useState } from "react"

import logo from './../assets/images/logo.png'
import favicon from './../assets/images/favicon.png'
import LoginModal from "./LoginModal"

const Nav = ()=>{
  const [isOpen, setOpen] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const menus = [
    {name: "찾기", address: "/register"},
    {name: "책방", address: "/bookstore"},
    {name: "커뮤니티", address: "/community"},
  ]

  const CloseHamburger = () => {
    if($('.hamburger').hasClass("active")){
      $('.hamburger').removeClass( 'active' );
      $('.navbar-menu').removeClass( 'active' );
    }
  };

  
  useEffect(()=>{
    CloseHamburger();
  },[pathname])


  // 스크롤 내리면 헤더스타일 변경
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("nav").addClass("non-top");
        $(".line").css('background-color', '#333');
    }else{
        $("nav").removeClass("non-top");
        $(".line").css('background-color', '#fff');
    }
  })

  // 햄버거 메뉴 클릭시 네비메뉴 출력 & 햄버거바 애니메인션
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
    <>
    <nav className="navbar">
      <div 
        onClick={()=>{navigate("/");}}
        className="navbar-logo"
        >
        <img src={favicon} style={{width:"40px"}} className="hex-logo"/>
        <img src={logo} style={{width:"60px"}} className="txt-logo"/>
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
        <li>
          <a onClick={()=>{
            setOpen(true);
            CloseHamburger();
            $('body').css("overflow", "hidden");
          }}>
            Login
          </a>
        </li>                  
      </ul>
    </nav>

    <LoginModal isOpen={isOpen} setOpen={setOpen} />
    </>
    )
}

export default Nav
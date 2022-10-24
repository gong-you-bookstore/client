import { useLocation, useNavigate } from "react-router-dom"
import $ from 'jquery'
import { useEffect, useState } from "react"

import logo from './../assets/images/logo.png'
import favicon from './../assets/images/favicon.png'
import LoginModal from "./LoginModal"
import { onClickHamburger, closeHamburger, changeNavByScroll } from "../utils/pageHelper"

const Nav = ()=>{
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const menus = [
    {name: "찾기", address: "/register"},
    {name: "책방", address: "/bookstore"},
    {name: "커뮤니티", address: "/community"},
  ]

  changeNavByScroll();

  useEffect(() => {
    window.scrollTo(0, 0)
    closeHamburger();
  },[pathname])


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
            closeHamburger();
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
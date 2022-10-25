import { useLocation, useNavigate } from "react-router-dom"
import $ from 'jquery'
import { useEffect, useState } from "react"
import useLocWizard from "../lib/hooks/useLocWizard"
import logo from './../assets/images/logo.png'
import favicon from './../assets/images/favicon.png'
import LoginModal from "./LoginModal"
import { onToggleHamburger, onCloseHamburger } from "../lib/utils"

const Nav = ()=>{
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const menus = [
    {name: "찾기", address: "/register"},
    {name: "책방", address: "/bookstore"},
    {name: "커뮤니티", address: "/community"},
  ]

  useLocWizard();

  return (
    <>
    <nav className="navbar">
      <div 
        onClick={()=>{navigate("/");}}
        className="navbar-logo"
        >
        <img src={favicon} style={{width:"40px"}} className="hex-logo" alt="img" />
        <img src={logo} style={{width:"60px"}} className="txt-logo" alt="img" />
      </div>
      
      <div className="hamburger" onClick={()=>onToggleHamburger()}>
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
            onCloseHamburger();
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
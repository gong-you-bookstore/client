import { Link, useNavigate } from "react-router-dom"
import $ from 'jquery'
import { useState } from "react"
import { useCookies } from "react-cookie";
import useLocWizard from "../../lib/hooks/useLocWizard"
import favicon from './../../assets/images/favicon.png'
import { onToggleHamburger, onCloseHamburger } from "../../lib/styles"
import { MENUS } from "../../lib/statics"
import { toastMaker } from "../../lib/utils";
const Nav = ()=>{
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();
  
  useLocWizard();

  return (
    <>
    <nav className="navbar">
      <div 
        onClick={()=>{navigate("/");}}
        className="navbar-logo"
        >
        <img src={favicon} style={{width:"40px"}} className="hex-logo" alt="img" />
        <h1>공유책방</h1>
      </div>
      
      <div className="hamburger" onClick={()=>onToggleHamburger()}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <ul className="navbar-menu">
        {
          MENUS.map((item, index)=>(
            <li key={index}>
              <Link to={item.address}>{item.name}</Link>
            </li>
          ))
        }

        {
          cookies.userData ? (
            <button
            className='ghost-btn'
            type="button"
            onClick={() => {
              removeCookie("userData", { path: "/" });
              toastMaker.success("로그아웃 되었습니다.");
            }}
            >
              로그아웃
            </button>
          ) : (
            <>
            <button
            className='ghost-btn'
            type="button"
            onClick={()=>{navigate("/login")}}
            >
              로그인
            </button>
            </>
          )
        }
          
        
      </ul>
    </nav>

    </>
    )
}

export default Nav
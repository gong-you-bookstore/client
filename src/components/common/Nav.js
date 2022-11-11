import { useNavigate } from "react-router-dom"
import $ from 'jquery'
import { useState } from "react"
import { useCookies } from "react-cookie";
import useLocWizard from "../../lib/hooks/useLocWizard"
import favicon from './../../assets/images/favicon.png'
import { onToggleHamburger, onCloseHamburger } from "../../lib/styles"
import LoginModal from "../../pages/LoginModal"
import { MENUS } from "../../assets/data"
const Nav = ()=>{
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [isOpen, setOpen] = useState(false);
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
            <li 
              key={index}
              onClick={()=>{navigate(item.address)}}
            >
              {item.name}
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
            }}
            >
              {cookies.userData.email}님 로그아웃
            </button>
          ) : (
            <>
            <button
            className='ghost-btn'
            type="button"
            onClick={() => {
              setOpen(true);
              onCloseHamburger();
              $('body').css("overflow", "hidden");
            }}
            >
              로그인
            </button>
            </>
          )
        }
          
        
      </ul>
    </nav>

    <LoginModal isOpen={isOpen} setOpen={setOpen} />
    </>
    )
}

export default Nav
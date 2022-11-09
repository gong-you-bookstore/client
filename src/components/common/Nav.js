import { useNavigate } from "react-router-dom"
import $ from 'jquery'
import { useState } from "react"
import useLocWizard from "../../lib/hooks/useLocWizard"
import favicon from './../../assets/images/favicon.png'
import { onToggleHamburger, onCloseHamburger } from "../../lib/styles"
import LoginModal from "../../pages/LoginModal"

const Nav = ()=>{
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const menus = [
    {name: "등록", address: "/register"},
    {name: "책방", address: "/store"},
    {name: "갤러리", address: "/jiheon788/gallery"},
    // {name: "설문", address: "/survey"},
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
        {/* <img src={logo} style={{width:"60px"}} className="txt-logo" alt="img" /> */}
        <h1>공유책방</h1>
      </div>
      
      <div className="hamburger" onClick={()=>onToggleHamburger()}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <ul className="navbar-menu">
        {
          menus.map((item, index)=>(
            <li 
              key={index}
              onClick={()=>{navigate(item.address)}}
            >
              {item.name}
            </li>
          ))
        } 
        <li
          onClick={() => {
            setOpen(true);
            onCloseHamburger();
            $('body').css("overflow", "hidden");
          }}
        >
            Login
        </li>                  
      </ul>
    </nav>

    <LoginModal isOpen={isOpen} setOpen={setOpen} />
    </>
    )
}

export default Nav
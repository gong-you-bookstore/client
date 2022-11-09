import { useNavigate } from "react-router-dom";
import favicon from './../../assets/images/favicon.png'

const Sidebar = () => {
  const navigate = useNavigate();
  const menus = [
    {name: "등록", address: "/register"},
    {name: "책방", address: "/store"},
    {name: "갤러리", address: "/jiheon788/gallery"},
    // {name: "설문", address: "/survey"},
  ]

  return (
    <aside>
      <div 
        onClick={()=>{navigate("/");}}
        >
        <img src={favicon} style={{width:"40px"}} className="hex-logo" alt="img" />
        {/* <img src={logo} style={{width:"60px"}} className="txt-logo" alt="img" /> */}
      </div>
    </aside>
  )
}

export default Sidebar;
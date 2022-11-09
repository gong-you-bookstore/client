import { useNavigate } from "react-router-dom";
import favicon from './../../assets/images/favicon.png'
import $ from 'jquery'
const Sidebar = () => {
  const navigate = useNavigate();
  const categories = [
    {name: "총류", kdc: "000"},
    {name: "철학", kdc: "100"},
    {name: "종교", kdc: "200"},
    {name: "사회과학", kdc: "300"},
    {name: "자연과학", kdc: "400"},
    {name: "기술과학", kdc: "500"},
    {name: "예술", kdc: "600"},
    {name: "언어", kdc: "700"},
    {name: "문학", kdc: "800"},
    {name: "역사", kdc: "900"},
  ]

  const onToggleArrow = () => {
    $('.arrow').toggleClass( 'deactive' );
    $('.side-bar').toggleClass('deactive');
  }


  return (
    <>
    <span className="arrow" 
    // onClick={()=>onToggleArrow()}
    />
    

    <aside className="side-bar fc-white">
      <ul>
        {
          categories.map((category, index) => (
            <li 
              key={index}
              // onClick={()=>{navigate(category.address)}}
            >
              {category.kdc} {category.name}
            </li>
          ))
        }
      </ul>
    </aside>
    </>
  )
}

export default Sidebar;
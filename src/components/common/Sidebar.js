import $ from 'jquery'

const Sidebar = () => {
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
    {name: "기타", kdc: ""},
  ]

  return (
    <>
    <aside className="side-bar fs-14">
      <ul>
        <li 
          className="active"
          onClick={()=>{
            $(`.side-bar li:nth-child(1)`).toggleClass("active")

            if($(`.side-bar li:nth-child(1)`).hasClass("active")) {
              $(`.side-bar li:nth-child(n+2)`).removeClass("active")
            }
          }}
        >
          <p>#</p>
          <p>전체</p>
        </li>
        {
          categories.map((category, index) => (
            <li 
              key={index}
              onClick={()=>{
                $(`.side-bar li:nth-child(1)`).removeClass("active");
                $(`.side-bar li:nth-child(${index + 2})`).toggleClass("active");
              }}
            >
              <p># {category.kdc}</p>
              <p>{category.name}</p>
            </li>
          ))
        }
      </ul>
    </aside>
    </>
  )
}

export default Sidebar;
import ShelfHeader from "../components/ShelfHeader";
import Nav from "../components/Nav";
import Shelf from "../components/Shelf";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

const Bookstore = ()=>{

  const navigate = useNavigate();

  return(
    <>
      <Nav />
      <ShelfHeader />
<div className="stone-background">
<Shelf />

</div>




    </>
  )
}

export default Bookstore;
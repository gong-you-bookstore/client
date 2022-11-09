import Banner from "../components/common/Banner";
import { useState } from "react";
import StorePage from "./StorePage";
import GalleryPage from "./GalleryPage";
const BookstorePage = ()=>{
  // const [gallaryRef, setIsScrollTo] = useScrollTo();

  const [isStore, setIsStore] = useState(true);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsScrollTo(true);
  //   }, 1100)
  // }, [])
  

  return(
    <>
    <header className="header-shelf">
    <Banner />
    </header>
    {
      isStore ? (
        <StorePage 
          isStore = {isStore}
          setIsStore = {setIsStore}
        />
      ) : (
        <GalleryPage 
          isStore = {isStore}
          setIsStore = {setIsStore}
        />
      )
    }
      

      
      



    </>
  )
}

export default BookstorePage;
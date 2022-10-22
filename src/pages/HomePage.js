import Intro from "../components/Intro";
import { useEffect, useRef } from "react";
import DoorHeader from './../components/DoorHeader'


const HomePage = ()=>{
  const introRef = useRef();

  const onClickDownBtn = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  return(
    <>
    <DoorHeader onClickDownBtn={onClickDownBtn}/>
    <Intro introRef={introRef}/>
    </>
    
  )
}

export default HomePage;
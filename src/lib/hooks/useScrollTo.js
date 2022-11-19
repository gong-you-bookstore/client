import { useEffect, useRef, useState } from "react"

const useScrollTo = () => {
  const ref = useRef(null);
  const [isScrollTo, setIsScrollTo] = useState(false);

  useEffect(()=>{
    if(ref.current && isScrollTo) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      setIsScrollTo(false);
    }
  },[isScrollTo])

  return [ref, setIsScrollTo];

}

export default useScrollTo;
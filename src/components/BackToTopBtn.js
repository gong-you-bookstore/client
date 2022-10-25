import { scrollToTopSmooth } from '../lib/utils';
const BackToTopBtn = () => {

  return (
    <>
      <button 
        className="top-btn fw-bold"
        onClick={()=>{scrollToTopSmooth();}}
      >TOP</button>
    </>
  )
}

export default BackToTopBtn;
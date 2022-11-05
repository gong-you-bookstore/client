import { scrollToTopSmooth } from '../../lib/utils';

const BackToTopBtn = () => {

  return (
    <>
      <button 
        className="rounded-btn"
        onClick={()=>{scrollToTopSmooth();}}
      >TOP</button>
    </>
  )
}

export default BackToTopBtn;
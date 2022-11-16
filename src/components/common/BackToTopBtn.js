import { scrollToTopSmooth } from '../../lib/utils';

const BackToTopBtn = () => {

  return (
    <>
      <button 
        className="rounded-btn"
        onClick={()=>{scrollToTopSmooth();}}
      >
        <span className="material-symbols-outlined">
        arrow_upward
        </span>
      </button>
    </>
  )
}

export default BackToTopBtn;
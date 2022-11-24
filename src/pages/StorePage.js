import React, { lazy, Suspense } from 'react';
import Loading from "../components/common/Loading";
const Cards = lazy(() => import('../components/store/Cards'));

const StorePage = () => {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <div className="white-cement-bg">
        <div className="gallery-area">
          <div className="content-section">
            <div className="container">
              <div className='card-grid'>
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
    </>
  )
}

export default StorePage
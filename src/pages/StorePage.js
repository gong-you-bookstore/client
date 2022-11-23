import React, { lazy, Suspense } from 'react';
import Loading from "../components/common/Loading";
// import GenreCard from "../components/home/GenreCard";
const Cards = lazy(() => import('../components/common/Cards'));
const SearchBar = lazy(() => import('../components/common/SearchBar'));


const StorePage = () => {

  return (
    <>
    <Suspense fallback={<Loading />}>
    <div className="white-cement-bg">
      <div className="gallery-area">
        <SearchBar />
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
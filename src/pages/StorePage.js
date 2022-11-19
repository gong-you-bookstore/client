import React, { lazy, Suspense } from 'react';
import Loading from "../components/common/Loading";
// import GenreCard from "../components/home/GenreCard";
const GenreCard = lazy(() => import('../components/home/GenreCard'));

const StorePage = () => {

  return (
    <>
    <Suspense fallback={<Loading />}>
    <div className="white-cement-bg">
      <div className="gallery-area">
        <GenreCard />
      </div>
    </div>
    </Suspense>
    </>
  )
}

export default StorePage
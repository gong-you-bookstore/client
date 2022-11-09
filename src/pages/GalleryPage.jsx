import React, { lazy, Suspense } from 'react';

import BookCarousel from "../components/BookCarousel";
import Banner from "../components/common/Banner";
import Loading from '../components/Loading';
const Gallery = lazy(() => import('../components/Gallery'));

const GalleryPage = () => {
  return (
      <Suspense fallback={<Loading />} >
        <Gallery/>
      </Suspense>
  )
}

export default GalleryPage;
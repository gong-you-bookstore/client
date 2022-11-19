import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading';
import React, { lazy, Suspense } from 'react';
import Card from '../bookstore/Card';

const GenreCard = () => {
  const navigate = useNavigate();

  return (
    <>
    <Suspense fallback={<Loading />}>
    <div className="content-section">
      <div className="container">
        <div className='card-grid'>
          <div className='card-gallery genre-card'
            onClick={() => {
              navigate("/gallery")
            }}
          >
            <h1 className='fc-white '>
            MY GALLERY
            </h1>
          </div>
          {
            CATEGORIES.map((category, index) => (
              <Card key={index} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
    </Suspense>
    </>
  )
}

export default GenreCard;
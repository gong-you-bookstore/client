import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const GenreInfo = () => {
  return (
    <div className="content-section">
        <div className="container">
          <div className='home-info-grid'>
          {
            CATEGORIES.map((category, index) => (
              <React.Fragment key={index}>
                <div 
                className={`card${category.code} info-card`} />
                <div className='info-form'>
                  <p className='info-title'>
                    {category.eng}
                  </p>
                  <p 
                    className={`info-content info${category.code}`}
                  >
                    {/* {category.desc} */}
                  </p>
                </div>
              </React.Fragment>
            ))
          }
          </div>
        </div>
      </div>
  )
}

export default GenreInfo;
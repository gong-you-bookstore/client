import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useCookies } from "react-cookie";
import { toastMaker } from '../../lib/utils';

const GenreInfo = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  return (
    <div className="content-section">
        <div className="container">
          <div className='home-info-grid'>
          {
            CATEGORIES.map((category, index) => (
              <div
                key={index}
                className={`card${category.code} card `}
                onClick={() => {
                  navigate(
                    `/genre`, 
                    { state: category }
                  )
                }}
              >
                <p className='fc-white '>
                  {category.eng}
                </p>
              </div>
              // <React.Fragment key={index}>
              //   <div 
              //   className={`card${category.code} info-card`} />
              //   <div className='info-form'>
              //     <p className='info-title'>
              //       {category.eng}
              //     </p>
              //     <p 
              //       className={`info-content info${category.code}`}
              //     >
              //     </p>
              //   </div>
              // </React.Fragment>
            ))
          }
          </div>
        </div>
      </div>
  )
}

export default GenreInfo;
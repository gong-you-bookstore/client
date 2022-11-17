import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';

const GenreCard = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="content-section">
        <div className="container flex-col-box">
          <div className='card-grid-2'>
            <div className='genre-card card000'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[0].code}`, 
                  { state: CATEGORIES[0] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Computer Science, Information & General Works
              </h1>
            </div>

            <div className='genre-card card100'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[1].code}`, 
                  { state: CATEGORIES[1] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
                Philosophy 
              </h1>
            </div>

          </div>
          <div className='card-grid-3'>
            <div className='genre-card card200'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[2].code}`, 
                  { state: CATEGORIES[2] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Religion
              </h1>
            </div>
            <div className='genre-card card300'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[3].code}`, 
                  { state: CATEGORIES[3] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Social Sciences
              </h1>
            </div>
            <div className='genre-card card400'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[4].code}`, 
                  { state: CATEGORIES[4] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Natural Science
              </h1>
            </div>
            <div className='genre-card card500'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[5].code}`, 
                  { state: CATEGORIES[5] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Technology
              </h1>
            </div>
            <div className='genre-card card600'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[6].code}`, 
                  { state: CATEGORIES[6] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Arts & Recreation
              </h1>
            </div>
            <div className='genre-card card700'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[7].code}`, 
                  { state: CATEGORIES[7] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Language
              </h1>
            </div>
          </div>
          <div className='card-grid-2'>
            <div className='genre-card card800'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[8].code}`, 
                  { state: CATEGORIES[8] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Literature
              </h1>
            </div>
            <div className='genre-card card900'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[9].code}`, 
                  { state: CATEGORIES[9] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              History & Geography
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GenreCard;
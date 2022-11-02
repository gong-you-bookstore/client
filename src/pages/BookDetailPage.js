import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const params = useParams();

  return (
    <>
    <div className="bg-dark-full-vh flex-col-box-center lh-2">
        <div className="container">
          <div className=" white-box">
            <h1 className="fc-white">
            ISBN: {params.isbn13}
            </h1>
          </div>
      </div>
      </div>
    </>
  )
}

export default BookDetailPage;
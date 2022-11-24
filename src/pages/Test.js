import { useEffect, useState } from "react";
import { getOneRecommendedBook, getMultiRecommendedBook } from "../lib/api/recommend";
const Test = () => {

  const [myBooks, setMyBooks] = useState(['9788931462050', '9788960775329', '9788964213018', '9788966262113'])

  return (
    <>
    <div className="bg-white-full-vh flex-col-box-center">
      <button 
        onClick={() => {
          getOneRecommendedBook("9788931462050").then(response => {
            console.log(response)
          }).catch(error => {
            console.log(error)
          })
        }}
      >one</button>

      <button
        onClick={() => {
          console.log(myBooks)
          getMultiRecommendedBook(myBooks).then(response => {
            console.log(response)
          }).catch(error => {
            console.log(error)
          })
        }}
      >multi</button>
    </div>
    </>
  )
}

export default Test;
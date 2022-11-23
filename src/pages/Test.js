import { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {

  const [myBooks, setMyBooks] = useState(['9788931462050', '9788960775329', '9788964213018', '9788966262113', '9788984753778'])

  const getSimilarBooks = async (isbn) => {
    return await axios({
      method: "get",
      url: `http://13.125.237.104:5000/recommend/one?isbn=${isbn}`,
    })
  }
  
  const getRecommendedBooks = async (books) => {
    return await axios({
      method: "post",
      url: `http://13.125.237.104:5000/recommend/multi`,
      data: {
        data: books
      }
    })
  }

  
  return (
    <>
    <div className="bg-white-full-vh flex-col-box-center">
      <button 
        onClick={() => {
          getSimilarBooks("9791156759270").then(response => {
            console.log(response)
          }).catch(error => {
            console.log(error)
          })
        }}
      >one</button>

      <button
        onClick={() => {
          getRecommendedBooks(myBooks).then(response => {
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
import { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {

  const [myBooks, setMyBooks] = useState([
    "9791168150102", 
    "9781956783001",
    "9780578990385"
  ])

  const getSimilarBooks = async (isbn) => {
    return await axios({
      method: "get",
      url: `http://127.0.0.1:5000/recommend/one?isbn=${isbn}`,
    })
  }
  
  const getRecommendedBooks = async (data) => {
    return await axios({
      method: "post",
      url: `http://127.0.0.1:5000/recommend/multi`,
      data
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
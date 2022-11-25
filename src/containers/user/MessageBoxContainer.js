import { useEffect, useState } from "react";
import { getMyMessage } from "../../lib/api/message";
import profile from "../../assets/images/profile.png"

const MessageBoxContainer = ({
  accessToken
}) => {
  const [myMessages, setMyMessages] = useState([]);

  useEffect(() => {
    getMyMessage(accessToken).then(response => {
      console.log(response);
      setMyMessages(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <ul className="container message-box desktop-box">
      {
        myMessages.map((myMessage, index) => (
          <li className="message-wrapper ">
            <img src={profile} width="40px" className="profile"/>
            jiheon788@ajou.ac.kr
          </li>
        ))
      }
      </ul>
    </>
  )
}

export default MessageBoxContainer;
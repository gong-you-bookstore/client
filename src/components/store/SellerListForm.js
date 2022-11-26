import React from "react";

const SellerListForm = ({
  sellers,
  onClickUser,
  cookies,
  onClickMessage,
  selectedUserData,
}) => {
  return (
    <>
    <div className="register-users-area">
      <h1 className="">
        등록한사람
      </h1>
      <div className="register-users">
        {
          sellers.map((seller, index) => (
            <React.Fragment key={index}>
            <div className="flex-sp-box w-100p">
              <div 
                key={index}
                className="fw-bold"
                
              >
                {seller}
              </div>
              <div className="register-btn-group">
                <button
                  type="button"
                  className="btn-sm transparent-btn"
                  onClick={() => {
                    onClickUser(seller);
                  }}
                >상세보기</button>
                <button
                  type="button"
                  className="btn-sm primary-btn"
                  onClick={() => {
                    onClickMessage(
                      selectedUserData.shelfId,
                      seller,
                      cookies.userData.email
                    );
                  }}
                >메시지</button>
              </div>
            </div>
            <div className="my-message-line"></div>
            </React.Fragment>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default SellerListForm;
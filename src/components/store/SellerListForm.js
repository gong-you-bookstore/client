const SellerListForm = ({
  sellers,
  onClickUser
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
            <div 
              key={index}
              className="primary-btn btn-xxl"
              onClick={() => {
                onClickUser(seller);
              }}
            >
              {seller}
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default SellerListForm;
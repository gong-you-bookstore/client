const SellerListForm = ({
  sellers,
  onClickUser
}) => {
  return (
    <>
    <h1 className="">
      등록한사람
    </h1>
    <div className="register-users">
      {
        sellers.map((seller, index) => (
          <div 
            key={index}
            className="transparent-btn btn-xxl"
            onClick={() => {
              onClickUser(seller);
            }}
          >
            {seller}
          </div>
        ))
      }
    </div>
    </>
  )
}

export default SellerListForm;
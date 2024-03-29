const SellerListForm = ({ sellers, onClickUser }) => {
  return (
    <>
      <div className="register-users-area">
        <h1 className="type-info">등록한사람</h1>
        <div className="register-users">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="transparent-btn btn-xxl"
              onClick={() => {
                onClickUser(seller);
              }}
            >
              # {seller.split('@')[0]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SellerListForm;

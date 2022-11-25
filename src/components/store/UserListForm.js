const UserListForm = ({
  users,
  onClickUser
}) => {
  return (
    <>
    <h1 className="">
      등록한사람
    </h1>
    <div className="register-users">
      {
        users.map((user, index) => (
          <div 
            key={index}
            className="register-user"
            onClick={() => {
              onClickUser(user);
            }}
          >
            {user}
          </div>
        ))
      }
    </div>
    </>
  )
}

export default UserListForm;
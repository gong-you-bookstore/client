import empty from '../../assets/images/empty.png'

const Empty = ({message}) => {
  return (
      <div className="empty-info">
        <img 
          src={empty}
          width="180px"
          alt="img"
        />
        <span>{message}</span>
      </div>
  )
}

export default Empty;
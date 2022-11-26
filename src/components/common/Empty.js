import empty from '../../assets/images/empty.png'

const Empty = () => {
  return (
      <div className="empty-info">
        <img 
          src={empty}
          width="180px"
          alt="img"
        />
      </div>
  )
}

export default Empty;
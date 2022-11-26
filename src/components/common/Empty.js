import empty from '../../assets/images/empty.png'

const Empty = () => {
  return (
      <div className="empty-info">
        <img 
          src={empty}
          width="180px"
          alt="img"
        />
        <span>추천책이 없습니다..</span>
      </div>
  )
}

export default Empty;
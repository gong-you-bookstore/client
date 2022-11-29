import empty from '../../assets/images/empty.png'
import { Bounce } from 'react-awesome-reveal';
const Empty = () => {
  return (
    <Bounce>
      <div className="empty-info">
        <img 
          src={empty}
          width="180px"
          alt="img"
        />
      </div>
    </Bounce>
  )
}

export default Empty;
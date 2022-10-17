
import data from './../assets/bookmini.json'

const Shelf = ()=>{
  
  return (
    <>
        
      <div className='book-container'>
        {
          data.map((item, index)=>(
            <div key={index} className='book'>
              <img src={item.img_url}/>
            </div>
          ))
        }
      </div>
      <div className='wood-shelf'></div>

      {/* <div className='book-container'>
        {
          data.map((item, index)=>(
            <div key={index} className='book'>
              <img src={item.img_url}/>
            </div>
          ))
        }
      </div>
      <div className='wood-shelf'></div>

      <div className='book-container'>
        {
          data.map((item, index)=>(
            <div key={index} className='book'>
              <img src={item.img_url}/>
            </div>
          ))
        }
      </div>
      <div className='wood-shelf'></div> */}

      
    </>
  )
}

export default Shelf
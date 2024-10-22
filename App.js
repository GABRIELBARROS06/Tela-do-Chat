import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

 
function App() {

  return (
  <div className = "sidebar">

   <div className = 'components'>
    <div className = "search">
      
    <IoSearch />
      <input className='' type= "" placeholder='Pesquisar'>
      </input>
      
        
      </div>
      <div className = 'contacts'>
        <div className='a'>
        <FaRegCircleUser />
        </div>
       
        <div className='b'>
        <FaRegCircleUser />
        </div>
        
        <div className='c'>
        <FaRegCircleUser />
        </div>
        
        <div className='d'>
        <FaRegCircleUser />
        </div>
        </div>
        
        <div className='card-Image'>

<div className='card1'>
<FaRegCircleUser />

</div>
<div className='card2'>
  slave
</div>
<div className='card3'>
  slave
</div>
<div className='card4'>
  slave
</div>

</div>




    </div>

  </div>

  )
}

export default App;

import React from 'react'

const AlertBox = () => {
  return (
    <div className='absolute z-50 top-0 left-0 flex justify-center items-center w-screen h-screen bg-[#00000060] backdrop-blur-sm '>
        <div className=' p-6 bg-white rounded-xl shadow-lg ' >
          <div className='font-bold' >Do you want to delete this message ? </div>
          <div className=' flex justify-evenly mt-4' >
            <button className='bg-black text-white hover:scale-110 scale-100 transition-all shadow-md px-3 py-2 rounded-md text-xs' >Cancel</button>
            <button className='bg-red-500 text-white hover:scale-110 scale-100 transition-all shadow-md px-3 py-2 rounded-md text-xs' >Delete</button>
          </div>
        </div>
    </div>
  )
}

export default AlertBox
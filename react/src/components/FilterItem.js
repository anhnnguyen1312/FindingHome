import React from 'react'

const FilterItem = ({ IconBefore, IconAfter, text }) => {
  return (
    <div className='bg-white py-2 px-4 w-full rounded-md text-gray-400 text-[13.3px] flex items-center justify-between'>
    <div className='flex items-center gap-1 w-full'>
        {/* {IconBefore} */}
        <span
            className={`font-medium text-black w-[100px]  font-medium text-black overflow-hidden text-ellipsis whitespace-nowrap`}
        >
            {text }
        </span>
    </div>
    {/* {IconAfter} */}
</div>
  )
}

export default FilterItem

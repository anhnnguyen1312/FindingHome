import React from 'react'
import {CardComponent} from './index'
import hcm2_img from '../assets/images/places/hcm.jpg'
import hn_img from '../assets/images/places/hn.jpg'
import hue_img from '../assets/images/places/hue.jpg'
// import hcm from '../assets/images/places/hcm'
const CardPlaces = () => {
  return (
    <div className='p-[5px]'>
         <h1 className=' text-center mt-[4vh] font-medium text-2xl '> Tìm Phòng ngay! </h1>
        <div className="flex justify-center items-center gap-[20px] py-[20px] ">
        <CardComponent
            src={hn_img}
            title='Hồ Chí Minh'
            description='Giá rẻ chỉ từ 2tr'
        />
         <CardComponent
            src={hcm2_img}
            title='Hà Nội'
            description='Giá rẻ chỉ từ 2tr'
        />
         <CardComponent
            src={hue_img}
            title='Đà Nắng'
            description='Giá rẻ chỉ từ 1tr'
        />
        </div>
    </div>
   
  )
}

export default CardPlaces

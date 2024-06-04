import React from 'react'
import Button from './Button'
import './HeroSection.css'
// import Banner from  '../../public/assets/images/Banner.jpg'
import banner from '../assets/images/Banner.jpg'
const HeroSection = () => {
  return (
    <div className='block div'>
    <div className="hero-container text-white text-lg">
        {/* <img className=" " src={banner}></img> */}
      <h1 className='text-2xl'>Tìm Phòng, Studio, Căn hộ mới ngay</h1>
      <p className='text-2xl'>Uy tín, chất lượng giá rẻ</p>
      <div className='mt-[32px] flex gap-[20px]'>
        <Button 
          children={'Tìm phòng'}
          textColor={'text-white'}
       
          bgColor={'bg-transparent'}
          borderRounded={'rounded-[6px]'}
          borderColor={'border-white'}
          >
         
        </Button>
        <Button
          children={'Đăng bài '}
          textColor={'text-black'}
       
          bgColor={'bg-white'}
          borderRounded={'rounded-[6px]'}
          borderColor={'border-white'}
        //   custom={'h-10 w-[15rem]'}
        >
          
        </Button>
      </div>
    </div>
    </div>
  )
}

export default HeroSection

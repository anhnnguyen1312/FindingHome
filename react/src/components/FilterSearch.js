import React from 'react'
import { Input,Select} from 'antd';
const FilterSearch = () => {
    const { Search } = Input;
    const handleChangeSelectFilter = () => {
  
    }
    const handleSearch = () => {
  
    }
  return (
    
    <div className='search--container'>
      <div className='search--bar'>
              <Search placeholder="Nhập tìm kiếm" onSearch={handleSearch} enterButton />
      </div>
      <div className='search--filter'>
        <div className='search--filter__location'>
          <Select
            defaultValue="phòng trọ"
           className='select--search'
            onChange={handleChangeSelectFilter}
            options={[
              {
                value: 'phòng trọ',
                label: 'phòng trọ',
              },
              {
                value: 'nhà nguyên căn',
                label: 'nhà nguyên căn',
              },
              {
                value: 'mặt bằng',
                label: 'mặt bằng',
              },
              {
                value: 'bất động sản',
                label: 'bất động sản',
                disabled: true,
              },
            ]}
          />

        </div>
{/* location--filter */}
        <div className='search--filter__location'>
          <Select
            defaultValue="Hồ Chí Minh"
           className='select--search'
            onChange={handleChangeSelectFilter}
            options={[
              {
                value: 'Hồ Chí Minh',
                label: 'Hồ Chí Minh',
              },
              {
                value: 'Hà Nội',
                label: 'Hà Nội',
              },
              {
                value: 'Huế',
                label: 'Huế',
              },
              {
                value: 'Bình Dương',
                label: 'Bình Dương',
                disabled: true,
              },
            ]}
          />

        </div>
        {/* filter--price */}
        <div className='search--filter__location'>
          <Select
            defaultValue="1.000.000"
           className='select--search'
            onChange={handleChangeSelectFilter}
            options={[
              {
                value: '1.000.000',
                label: '1.000.000',
              },
              {
                value: '2.000.000',
                label: '2.000.000',
              },
              {
                value: '3.000.000',
                label: '3.000.000',
              },
              {
                value: '4.000.000',
                label: '4.000.000',
                disabled: true,
              },
            ]}
          />

        </div>
        {/* select-- dien tích */}
        <div className='search--filter__location'>
          <Select
            defaultValue="10m2"
           className='select--search'
            onChange={handleChangeSelectFilter}
            options={[
              {
                value: '10m2',
                label: '10m2',
              },
              {
                value: '15m2',
                label: '15m2',
              },
              {
                value: '20m2',
                label: '20m2',
              },
              {
                value: '25m2',
                label: '25m2',
                disabled: true,
              },
            ]}
          />

        </div>
        {/* btn--search */}
        <div className='btn--search--wrapper'>
          <button className='btn--search' type='submit' > Tìm Kiếm</button>
        </div>
        

      </div>
      </div>
  )
}

export default FilterSearch

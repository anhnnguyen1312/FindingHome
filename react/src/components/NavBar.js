import React, { useState, useEffect } from 'react'
import Button from './Button'
import { Link,  NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { Input,Select} from 'antd';
import {path} from '../ultils/path'
const { Search } = Input;
export default function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    let navigate = useNavigate();
    function handleLogInNavigate(stateIsRegister) {
        // navigate('/home');
        navigate(path.LOGIN, {state : {stateIsRegister}})
      };
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  const handleSearch = () => {
  
  }
 
  // const handleSignIn = () => {
  //   navigate(path.LOGIN)

  // }
  const handleChangeSelectFilter = () => {
  
  }
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  return (
    <div>
        <h1> hello</h1>
      
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to={path.HOME} className='navbar-logo' onClick={closeMobileMenu}>
            Anh-Phú
            <i class='fa-brands fa-suse' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' activeClassName="nav-links-active" onClick={closeMobileMenu}>
                Trang chủ 
              </NavLink>
            </li>
            <li className='nav-item'>
              <Link
                to={path.HOME}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tìm phòng trọ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tìm nhà
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Tìm mặt bằng, văn phòng
              </Link>
            </li>
          </ul>
          <div className='navbar_search'>
          
          {/* <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: '215px',
                color:'white'
              }}
              /> */}
            
            <a className='cart' href='/'>
              <i class="fa-solid fa-user"></i>
            </a>
            <a className='cart'>
            <i class="fa-solid fa-heart"></i>
            </a>
          </div>

          <div className='login--container'>
            <Button 
                children={ 'Đăng Nhập' }
                bgColor= {'bg-primary'}
                textColor= {'text-white'}
                boderColor= {'border-slate-950'}
                onClick= {() => handleLogInNavigate(false)}
            />

            <Button 
                children={ 'Đăng Ký' }
                bgColor= {'bg-transparent'}
                textColor= {'text-white'}
                borderColor= {'border-white'}
                onClick= {() => handleLogInNavigate(true)}
            />
          </div>

        </div>
      </nav>
      {/* // search */}

      <div className='search--container'>
      <div className='search--bar'>
              <Search placeholder="Nhập tìm kiếm" onSearch={handleSearch} enterButton />
      </div>
      <div className='search--filter'>
        <div className='search--filter__type'>
          <Select
            defaultValue="phòng trọ"
            style={{
              width: 215,
            }}
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
            style={{
              width: 215,
            }}
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
            style={{
              width: 215,
            }}
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
            style={{
              width: 215,
            }}
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
    </div>
  )
}

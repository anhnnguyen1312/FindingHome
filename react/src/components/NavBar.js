import React, { useState, useEffect } from 'react'
import Button from './Button'
import { Link,  NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { Input,Select} from 'antd';
import {path} from '../ultils/path'
import {useDispatch, useSelector} from 'react-redux'
// import { logoutAction } from '../../redux/store/action/authenAction.js';
import { logoutAction } from '../redux/store/action/authenAction';
const { Search } = Input;

export default function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch ()
    function handleLogInNavigate(stateIsRegister) {
        // navigate('/home');
        navigate(path.LOGIN, {state : {stateIsRegister}})
      };
      const stateAuth = useSelector(state => state.auth)
console.log('render',stateAuth.isLoggedIn)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

 
  const handleLogOut = () => {
    dispatch(logoutAction())

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
  
    useEffect(() => {
      console.log('isLogIn',stateAuth.isLoggedIn)
      // stateAuth.isLogIn && usenavi('/')
    },[stateAuth.isLoggedIn])

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
            {/* <li className='nav-item'>
              <NavLink to={path.HOME} className='nav-links' activeClassName="nav-links-active" onClick={closeMobileMenu}>
                Trang chủ 
              </NavLink>
            </li> */}
            <li className='nav-item'>
              <Link
                to={path.HOME}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Trang chủ 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={path.ROOM_RENTAL}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tìm phòng trọ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={path.HOUSE_RENTAL}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tìm nhà
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to={path.ESTATE_RENTAL}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tìm mặt bằng
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
          {!stateAuth.isLoggedIn ? 
          <>
         
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
             </>
            :      
            <Button 
                children={ 'Đăng Xuất' }
                bgColor= {'bg-red-600'}
                textColor= {'text-white'}
                borderColor= {'border-white'}
                onClick= {handleLogOut}
            />
           
            }
              <Button 
                children={ 'Đăng Bài' }
                bgColor= {'bg-[#2ADA66]'}
                textColor= {'text-white'}
                borderColor= {'border-white'}
               
            />
          
         
          
          </div>
          
        </div>
      </nav>
      {/* // search */}

      
</div>
    // </div>
  )
}

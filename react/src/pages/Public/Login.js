import React, {useState, useEffect} from 'react'
import { InputGroup } from '../../components'
import { useNavigate} from 'react-router-dom';
import {path} from '../../ultils/path'
import {useLocation} from 'react-router-dom';
import  Button from '../../components/Button'
import axios from 'axios'
import { callApiRegister } from '../../api/authenLogin';
import { registerAction,loginAction } from '../../redux/store/action/authenAction.js';
import {useDispatch, userDispatch} from 'react-redux'
export default function Login() {
  let useLocate = useLocation()
  let dispatch = useDispatch()
  const [isResgister,setIsRegister] = useState(useLocate.state?.stateIsRegister)
  const [formData,setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    setIsRegister(useLocate.state?.stateIsRegister)
  },[useLocate.state?.stateIsRegister])

// /axios test api
  // useEffect(() => {
  //   axios.post(`http://localhost:3000/users`)
  //   .then(res => {
  //     const persons = res.data;
  //     console.log('person',persons)
  //   })
  //   .catch(error => console.log(error));
  // },[])

  //axios post data api 
// const user = '1'
//   useEffect(() => {
//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//     .then(res => {
//       console.log(res);
//       console.log(res.formData);
//     })
//     .catch(error => console.log(error));
//   },[]) 
// GỌI API VỚI FETCH 
  // var api = 'http://localhost:3000/users'
  // fetch(api)
  // .then(function(response){
  //   return response.json();
  // })
  // .then(function(person){
  //   console.log('person',person)

  // })

    const handleSignIn = () => {
      setIsRegister(true)
  
    }
    const handleLogIn = () => {
      setIsRegister(false)
  
    }
    console.log('formData ben Login page',formData)
    const handleSubmit = async() => {
      console.log('formData',formData)
  //     const response = await callApiRegister(formData)
  // console.log('response', response)
  {isResgister ? dispatch(registerAction(formData)) :  dispatch(loginAction(formData))}
    }
  //post


  // axios.post(`http://localhost:3005/users`, { formData })
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  //   .catch(error => console.log(error));
    

  return (
    <div className=''>
      
      
      <form action="" method="POST" className='w-[30rem] min-h-28 px-6 py-8 text-center border-[#1dbfaf] bg-white border rounded-sm m-6 self-center' id="form-1">
       <h1 className='text-3xl font-[600] mb-[1rem]'> {isResgister? 'Đăng ký' : 'Đăng nhập'  } </h1>
       <p className='text-[1.2rem] leading-10 mb-2 mt-4 text-center font-light'>Đăng nhập ngay để tìm được phòng ưng ý nhất❤️</p>
       {isResgister &&  
          <>
            <InputGroup value= {formData.name} setFormData= {setFormData} type={'name'} labelChild={'Họ và Tên'} placeholder={'Mời bạn nhập Họ và Tên '}/>
            <InputGroup value= {formData.email} setFormData= {setFormData} type={'email'} labelChild={'Email'} placeholder={'Mời bạn nhập Email'}/>
          </>
       }
        <InputGroup value= {formData.phone} setFormData= {setFormData} type={'phone'} labelChild={'Số điện thoại'} placeholder={'Mời bạn nhập Số điện thoại '}/>
        <InputGroup value= {formData.password} setFormData= {setFormData} type={'password'} labelChild={'Mật khẩu'} placeholder={'Mời bạn nhập Mật khẩu'}/>
       
        <Button  
                children={isResgister? 'Đăng ký' : 'Đăng nhập' }
                bgColor= {'bg-[#1dbfaf]'}
                textColor= {'text-white'}
                borderColor= {'border-white'}
                onClick= {handleSubmit}
                fullWidth
                hovercolor= {'hover:bgColor-[#18ad9e]'}
                />
        <div className='flex justify-between mt-4 text-blue-600'>
         {isResgister ? 
            <p  onClick={handleLogIn}  className='cursor-pointer hover:underline' >Đăng nhập ngay</p>
          : 
           <>
            <p onClick={handleSignIn} className='cursor-pointer hover:underline'>Bạn chưa có tài khoản?</p>
            <p className='cursor-pointer hover:underline' >Bạn quên mật khẩu ?</p>
          </>
        
         }
        </div>
        </form>
    </div>
  )
}

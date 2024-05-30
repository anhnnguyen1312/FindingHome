import axiosConfig from '../axiosConfig'

// api register
export const callApiRegister = (payload) =>  new Promise(async(resolve, reject) => {
    // console.log('payloadp',payload)
    try {
        const response = await axiosConfig({
            method:'post',
            url: 'http://localhost:3000/users',
            data: payload
        })
        resolve(response)
    }
    catch(error) {

reject(error)
    }
})

// api register
export const callApiLogin = (payload) =>  new Promise(async(resolve, reject) => {
    // console.log('payloadp',payload)
    try {
        const response = await axiosConfig({
            method:'post',
            url: 'http://localhost:3000/users',
            data: payload
        })
        resolve(response)
    }
    catch(error) {

reject(error)
    }
})

export const callApiUserInfor = () =>  new Promise(async(resolve, reject) => {
    console.log('callApiUserInfor')
    try {
        const response = await axiosConfig({
            method:'get',
            url: 'http://localhost:3000/users',
        })
        console.log('response callApiUserInfor',response)

        resolve(response)
    }
    catch(error) {

reject(error)
    }
})
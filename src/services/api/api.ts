import axios from 'axios'

axios.defaults.baseURL = 'https://641b2a469b82ded29d4bddd7.mockapi.io/api'

interface IBody {
    language: string
    gender: string
    age: string
    hate: string[]
    topics: string[]
    email: string
}

export const sendUserData = async (body: IBody) => {
    console.log('body:', body)
    const res = await axios.post('/answers', body)
    return res.data
}

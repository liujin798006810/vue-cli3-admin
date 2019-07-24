import { get, post } from './request'

export const login = login => post('/api/post/user/login', login)  //登陆

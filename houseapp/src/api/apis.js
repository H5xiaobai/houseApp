import axios from 'axios'
import qs from 'qs'

let IP="http://192.168.1.117:80/"



//登录
export function login(acc,pwd){
    return axios.post( IP+'login.php',qs.stringify({acc,pwd}))
}

//注册
export function register(acc,pwd){
    return axios.post(IP+'reg.php',qs.stringify({acc,pwd}))
}

//猜你喜欢
export function youLike(){
    return axios.get(IP+'gethouselist.php')
}
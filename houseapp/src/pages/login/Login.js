import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Flex,WhiteSpace,InputItem,WingBlank,Button} from 'antd-mobile'

import {login} from '../../api/apis'
import './Login.css'
let logo={width:'40%',marginTop:'50px'}
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            account:'',
            pwd:'',
            flag:'none'
        }
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                 <Flex justify="center" style={{height:'25%'}}>
                      <img style={logo} src={require('../../assets/imgs/logo.jpg')} alt=''/>
                 </Flex>
                 <WhiteSpace size="lg" />
                 <WhiteSpace size="lg" />
                 <WingBlank size="lg" style={{height:'65%'}}>
                     {/* 账号 */}
                    <InputItem placeholder="请输入你的账号"
                               clear
                               value={this.state.account}
                               onChange={(val)=>this.setState({account:val})}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/zhanghao.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    {/* 密码 */}
                    <WhiteSpace size="sm" />
                    <InputItem placeholder="请输入密码"
                               clear
                               value={this.state.pwd}
                               type='password'
                               onChange={(val)=>this.setState({pwd:val})}
                    >
                        <div style={{ backgroundImage:`url(${require('../../assets/imgs/mima.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                     {/* 密码 */}
                     <p style={{display:this.state.flag,color:'red',textIndent:'50px'}}>你输入的密码不正确</p>
                    <Button style={{color:'#fff'}} type='primary' onClick={this.loginStart.bind(this)}>登录</Button>
                    <WhiteSpace size="sm" />
                    
                     {/* 立即注册，忘记密码 */}
                     <Flex justify="between">
                          <Link to='/reg' style={{color:'#108ee9'}}>立即注册</Link>
                          <Link to='/forget' style={{color:'#108ee9'}}>忘记密码</Link>
                      </Flex>
                </WingBlank>
                <Flex style={{height:'10%'}} direction='column'>
                          <p style={{color:'#ccc'}}>你已同意相关条例政策</p>
                </Flex>
            </div>
        )
    }
    //登陆
    async loginStart(){
        let res=await login(this.state.account,this.state.pwd)
        if(res.data ==='ok'){
             localStorage.setItem('account',this.state.account)
             window.location.href="#/"
        }else{
             this.setState({
                flag:'block'
             })
        }
           
    }
}

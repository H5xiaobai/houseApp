import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {WhiteSpace,InputItem,WingBlank ,Flex, Checkbox,Button,Toast} from 'antd-mobile'

//引入api
import {register} from '../../api/apis'

const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
    constructor(){
        super()
        this.state={
            accout:'',//账号
            pwd:'',//密码
            code:''//验证码
        }
    }
    render() {
        return (
            <div>
                <WhiteSpace size='lg'/>
                <WingBlank size='lg'>
                    <h2>账户注册</h2>
                    <InputItem value={this.state
                    .accout} clear placeholder="请输入你的用户名" onChange={(val)=>this.setState({accout:val})}/>
                    <InputItem value={this.state
                    .pwd} clear placeholder="请输入你的密码" type='password' onChange={(val)=>this.setState({pwd:val})}/>
                    <InputItem clear value={this.state
                    .code} placeholder="请输入验证码" extra='获取验证码' onChange={(val)=>this.setState({code:val})}/>
                    {/* 政策 条例*/}
                    <Flex>
                        <Flex.Item>
                        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                            我已同意<span style={{color:'#108ee9'}}>《用户服务条例》及《隐私权政策》</span>
                        </AgreeItem>
                        </Flex.Item>
                    </Flex>

                    <WhiteSpace size='lg'/>
                     {/* 按钮 */}
                     <Button style={{color:'#fff'}} type='primary' onClick={this.clickReg.bind(this)}>注册</Button><WhiteSpace />

                     <WhiteSpace size='lg'/>
                     {/* 已有账号 */}
                     <Link to='/login' style={{color:'#108ee9'}}>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
   
    //注册
    async clickReg(){
        let res=await register(this.state.accout,this.state.pwd)
        if(res.data==='ok' && (this.state.accout!==''||this.state.pwd!=='')){
            Toast.success('注册成功！')
            window.location.href='#/login'
        }else{
            Toast.success('注册失败！请重新填写')
        }
        
    }
}
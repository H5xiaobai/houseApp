import React, { Component } from 'react'
import {Button} from 'antd-mobile'

import "./Chat.css"
export default class Chat extends Component {
    render() {
        return (
            <div className='Chat_box'>
               <div className='chat_centerbox'>
                   <p><img src={require('../../../assets/imgs/icon_kefu.jpg')} alt=''/></p>
                   <p>置业顾问<span style={{marginLeft:'5%',color:'#108ee9'}}>金咕咕</span></p>
                   <p>专业的服务无人能比</p>
                   <Button type="primary" inline size="small">我要聊天</Button>
               </div>
            </div>
        )
    }
}
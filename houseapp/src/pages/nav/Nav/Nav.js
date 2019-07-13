import React, { Component } from 'react'
import {TabBar } from 'antd-mobile'

import Main from '../main/Main'
import Chat from '../chat/Chat'
import History from '../history/History'
import My from '../my/My'

import './Nav.css'
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'main',//选中状态
          iconArr:[
              {id:'main',title:'首页',icon:'icon_main'},
              {id:'chat',title:'微聊',icon:'icon_chat'},
              {id:'history',title:'足迹',icon:'icon_history'},
              {id:'my',title:'我的',icon:'icon_my'},
            ]
        }
    }
    render() {
        return (
            <div>
                <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                >
                   {
                       this.state.iconArr.map(obj=>  <TabBar.Item
                        title={obj.title}
                        key={obj.id}
                        icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background:`url(${require('../../../assets/imgs/'+ obj.icon +'.png')}) center center /  21px 21px no-repeat`}}
                        />
                        }
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${require('../../../assets/imgs/'+ obj.icon +'_s.png')}) center center /  21px 21px no-repeat`}}
                        />
                        }
                        selected={this.state.selectedTab ===obj.id}
                        onPress={() => {
                        this.setState({
                            selectedTab: obj.id,
                        });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent()}
                    </TabBar.Item>)
                   }
                </TabBar>
            </div>
            </div>
        )
    }
    renderContent(){
              switch(this.state.selectedTab){
                    case 'main':return <Main/>
                    case 'chat':return <Chat/>
                    case 'history':return <History/>
                    case 'my':return <My/>
                    default:return <Main/>
              }
    }
}

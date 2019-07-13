import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {WhiteSpace,List} from 'antd-mobile'
import './My.css'

const Item = List.Item;

export default class My extends Component {
    constructor(){
        super()
        this.state={
            lists:[//列表数据
                {id:'0'},
                {id:'1',src:'icon_jifen2',text:'我的积分'},
                {id:'2',src:'icon_dingyue',text:'我的订阅'},
                {id:'3',src:'icon_weiliao',text:'我的微聊联系人'},
                {id:'10'},
                {id:'4',src:'icon_fangdai',text:'房贷计算器'},
                {id:'5',src:'icon_myhouse',text:'我的房子'},
                {id:'11'},
                {id:'6',src:'icon_jiaoyi',text:'我的查房记录'},
                {id:'7',src:'icon_anwser',text:'我的回答'},
                {id:'12'},
                {id:'8',src:'icon_shezhi2',text:'设置'},
                {id:'9',src:'icon_fankui',text:'意见反馈'}
            ],
            account:''
        }
    }
    render() {
        return (
            <div className="my">
                <div className='myhead'>
                    {/* 上 */}
                    <div className="myhead_top">
                        <div className='left'>
                            <img src={require('../../../assets/imgs/icon_kefu.jpg')} alt=''/>
                            <div style={{marginLeft:'8%',color:'#f1f1f1'}}>
                                <h3 style={{margin:'5% 0',display:this.state.account ===''? "block":"none"}}><Link to='/login' style={{color:'#f1f1f1'}}>登录</Link>/<Link to='/res'  style={{color:'#f1f1f1'}}>注册</Link></h3>
                                <h3 style={{color:'#f1f1f1',display:this.state.account===''?'none':'block'}}>{this.state.account}</h3>
                                <p style={{margin:"0"}}>可以与经济人发起聊天</p>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={require('../../../assets/imgs/icon_setting.png')} style={{width:'20%',height:'20%',marginTop:'20%'}} alt=''/>
                        </div>
                    </div>
                    {/* 下 */}
                    <div className='myhead_bottom'>
                        <div className='item'>
                            <label>0</label>
                            <p><img src={require('../../../assets/imgs/icon_qianbao.png')} alt=''/>钱包</p>
                        </div>
                        <div className='item'>
                            <label>0</label>
                            <p><img src={require('../../../assets/imgs/icon_youhui.png')} alt=''/>优惠</p>
                        </div>
                        <div className='item'>
                            <label>0</label>
                            <p><img src={require('../../../assets/imgs/icon_jifen.png')} alt=''/>积分</p>
                        </div>
                    </div>
                </div>
                 
                <List>
                    {
                        this.state.lists.map((obj,id)=>
                           {
                                if(obj.src){
                                    return <Item
                                    thumb={require('../../../assets/imgs/'+obj.src+'.png')}
                                    arrow="horizontal"
                                    key={id}
                                    style={{borderBottom:'1px solid #ccc'}}
                                    onClick={this.clickmsg.bind(this,obj.text)}
                                    >{obj.text}
                                    </Item>
                                }else{
                                  return <WhiteSpace key={id} size="lg" style={{backgroundColor:'#ccc'}}/>
                                }
                           }
                        )
                    }
                </List>      
            </div>
        )
    }
    componentDidMount(){
        // console.log(localStorage.getItem('account'));
        if(localStorage.getItem('account')){
            this.setState({
                account:localStorage.getItem('account')
            })
        }
        
    }
    //将来做每一栏可以点击跳转对应的界面
    clickmsg(text){
        console.log(text);
    }

}
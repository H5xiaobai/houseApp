import React, { Component } from 'react'
import {connect} from 'react-redux'
import {WingBlank} from 'antd-mobile'

//引入公共组件
import HouseInfo from '../../../components/HouseInfo'
import './history.css'
class History extends Component {
    render() {
        let { likeHouse } = this.props
        
        return (
             <div> 
                  <WingBlank type='sm'>
                  <h3 style={{display:likeHouse.length===0?'block':'none'}}>你还没有历史足迹哦~~~</h3>
                       {   
                       likeHouse.map(obj=><HouseInfo obj={obj} key={obj.id}/>)
                       } 
                   
                   {/* <div className='youLike' key={obj.id}>
                         <div className='youLike_left'>
                             <img src={obj.src} style={{width:'50%'}} alt=''/>
                                <div className='content_box'>
                                    <h2 style={{fontSize:'14px'}}>{obj.name}</h2>
                                    <p>{obj.range}<span style={{marginLeft:'6%'}}>{obj.area}</span></p>
                                    <p>{obj.type}<span style={{marginLeft:'6%'}}>{obj.point}平</span></p>
                                </div>
                            </div>
                            <label style={{color:'red',fontSize:'16px',fontWeight:600}}>{obj.price}/平</label>
                        </div> */}
                   </WingBlank>  
             </div>
        ) 
    }
}

export default connect((state)=>{//state自动传入的参数===store.state
    return{
        likeHouse:state.likeHouse
    }
})(History)

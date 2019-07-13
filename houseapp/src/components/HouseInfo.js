import React, { Component } from 'react'



// 公共组件： 房产数据项
// props： key=obj，描述：一个房产数据对象
export default class getcity extends Component {
    static defaultProps={
        //公共组件可以设置默认值，防止出错
       //做容错
         obj:{
             src:'',
             name:'楼盘',
             range:'东区',
             area:'西城',
             type:'wd',
             price:'20000'
         }
    }
    render() {
        let {obj}=this.props
        return (
                <div className='youLike'>
                    <div className='youLike_left'>
                        <img src={obj.src} style={{width:'50%',height:'50%'}} alt=''/>
                        <div className='content_box'>
                            <h2 style={{fontSize:'14px'}}>{obj.name}</h2>
                            <p>{obj.range}<span style={{marginLeft:'6%'}}>{obj.area}</span></p>
                            <p>{obj.type}<span style={{marginLeft:'6%'}}>{obj.point}平</span></p>
                        </div>
                    </div>
                    <label style={{color:'red',fontSize:'16px',fontWeight:600}}>{obj.price}/平</label>
                </div>
        )
    }
}

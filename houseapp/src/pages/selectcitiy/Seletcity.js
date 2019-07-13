import React, { Component } from 'react'
import {List} from 'antd-mobile'
import mycity from'./Test.json'

//引入better-scroll
import BSscroll from 'better-scroll'

export default class Selectcity extends Component {
    render() {
        return ( 
            <div>  
                    <h3 style={{fontSize:'24px',textAlign:'center',background:'#108ee9',padding:'15px',margin:'0px',color:'#f1f1f1'}}>城市选择列表</h3>
                     
                    {/* 右侧浮动栏 */}
                     <div style={{width:'5%',position:'fixed',right:'0',top:'30%', zIndex:'101'}} onTouchMove={this.touchs.bind(this)}>
                          {
                            mycity.city.map((obj,id)=><div className="cur_letter" onClick={this.clickLetter.bind(this,obj.title)} key={id} style={{fontSize:'18px'}}>
                                    {obj.title}
                            </div>)
                          }
                     </div>
                    {/* 左侧城市 */}
                    <div id="leftCity" style={{width:'95%',height:'100%',overflow:'auto',position:'fixed'}}>
                        <ul className="content" style={{padding:'0'}}>
                                    {/* 热门城市 */}
                                <div style={{backgroundColor:'#fff',padding:'10px 0 10px 17px'}}>
                                    <h4 style={{margin:'0',fontSize:'20px'}}>热门城市</h4>
                                    <div style={{display:'flex',flexWrap:'wrap'}}>
                                        {
                                        mycity.hotcity.map((obj,id)=><div key={id} style={{width:'25%',height:'40px',borderBottom:'1px solid #f1f1f1',marginTop:"20px",fontSize:'18px'}}>
                                            {obj}
                                        </div>)
                                        }
                                    </div>
                                </div>
                                {/* 下方字母开头的城市 */}
                                <div>
                                    {
                                    mycity.city.map((obj,id)=><List.Item key={id} id={obj.title}>
                                            <h4 style={{fontSize:'24px',margin:'0'}}>{obj.title}</h4>
                                            {
                                                obj.lists.map((obj,index)=><List.Item key={index} platform='android' onClick={() => {}}>
                                                    <p style={{fontSize:'20px',margin:'0',fontWeight:'500'}}>{obj}</p>
                                                </List.Item>)
                                            }
                                    </List.Item>)
                                    }
                                </div>
                        </ul>                     
                    </div>
                    
            </div>
        )
    }
    //事件：屏幕上滑动的时候连续地触发
    touchs(e){
        // H5新增移动端事件： 监听的是手指按压屏幕后，连续移动
        // 获取当前用户手指的详细信息（移动端独有的！！！！！PC端木有）
        //console.log('x坐标',e.touches[0].clientX);//获取x坐标
        //console.log('y坐标',e.touches[0].clientY);//获取y坐标

        //elementFromPoint: 根据坐标点，获取当前坐标的元素对象
      let curElt=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
      if(curElt && curElt.className ==='cur_letter'){
            //如果当前元素对象存在并且等于右侧对象，就使其滚动
            this.leftscoll.scrollToElement(document.getElementById(curElt.innerHTML),300)
      }  
    }

    // 添加better-scroll效果
    componentDidMount(){
      this.leftscoll= new BSscroll('#leftCity')
    }

    // 右侧浮动每一个字母的触发事件
    clickLetter(title){
        //console.log(title);//A,B,C,D...
     this.leftscoll.scrollToElement(document.getElementById(title),300)
    }
}
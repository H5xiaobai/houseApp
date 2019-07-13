import React, { Component } from 'react'
import {Carousel,Grid,WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'

//引入样式
import './Main.css'

//引入api
import {youLike} from '../../../api/apis'
import store from '../../../store';

//引入公共组件
import HouseInfo from '../../../components/HouseInfo'
//图标菜单
const data =[
    {icon:'icon_computer',text:'信息房'},{icon:'icon_newhouse',text:'新房'},{icon:'icon_message',text:'消息房'},{icon:'icon_office',text:'邮房'},{icon:'icon_overseas',text:'海景房'},{icon:'icon_questions',text:'问题房'},{icon:'icon_renting',text:'出租房'},{icon:'icon_tallage',text:'套餐房'}
   ].map((_val) => ({
    icon: require('../../../assets/imgs/'+ _val.icon+'.png'),
    text: _val.text,
  }));
//房产百科
const houseData =[
    {icon:'icon_daikuan',text:'我要贷款'},
    {icon:'icon_jisuan',text:'房贷计算'},
    {icon:'icon_zhishi',text:'知识'},
    {icon:'icon_sao',text:'扫一扫'}
   ].map((_val) => ({
    icon: require('../../../assets/imgs/'+ _val.icon+'.png'),
    text: _val.text,
  }));
class Main extends Component {
    constructor(){
        super()
        this.state={
            data: ['banner_1', 'banner_2', 'banner_3'],//轮播图
            imgHeight: 176,
            cityremind:'定位中',
            gethouseArr:[]//定义获取猜你喜欢的数组
        }
    }
    async componentWillMount(){
         let res=await youLike()
         this.setState({
             gethouseArr:res.data
         })
         
    }
    render() {
        return (
            <div className="main_box">
                {/* 搜索头部 */}
                <div className="main_box_head">
                    <label onClick={this.changeCity}>{this.state.cityremind}▼</label>
                    <div className="main_head_center"  onClick={this.search}>
                        <img src={require('../../../assets/imgs/icon-search.png')} alt=''/>
                        <label>挑好房，上悟空App</label>
                    </div>
                    <img  onClick={this.selectMap} src={require('../../../assets/imgs/icon_map.png')} alt=''/>
                </div>
                 
                 {/* 轮播图 */}
                 <Carousel
                    autoplay
                    infinite
                    >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                src={require('../../../assets/imgs/'+ val +'.jpg')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                            </a>
                        ))}
                 </Carousel>
                 
                 {/* 图标菜单 */}
                 <Grid data={data} hasLine={false} onClick={_el => console.log(_el)} />
                  <div className='house_box'> </div>
                 
                  {/*房产百科  */}
                  <div className="sub-title">
                      <h3>房产百科<label>专业级买房</label></h3>
                  </div>
                  <Grid data={houseData} columnNum={4}  hasLine={false} onClick={_el => console.log(_el)}/>

                  <div className='house_box'></div>
                  {/* 猜你喜欢 */}
                  <WingBlank size="lg">
                     {
                         this.state.gethouseArr.map(obj=><div key={obj.id} onClick={this.clickAddHouse.bind(this,obj)} >
                             <HouseInfo obj={obj} key={obj.id}/>
                         </div>)
                     }
                     {/* 未抽取组件前替换的循环后的div */}
                     {/* <div className='youLike' key={obj.id} onClick={this.clickAddHouse.bind(this,obj)}>
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
    //定位
    componentDidMount(){
        let _this=this
         //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    //地图显示当前城市
                    _this.setState({cityremind:cityinfo})
                }
            } else {
                console.log(result.info);
                
            }
        });
    }
    //切换城市
    changeCity(){
        window.location.href='#/selectcity'
    }
    //搜索框
    search(){
        window.location.href='#/search'
    }
    //地图
    selectMap(){
        window.location.href='#/map'
    }
    //浏览猜你喜欢，添加到足迹
    clickAddHouse(obj){
        // console.log(obj);
        store.dispatch({
            type:'addHouse',
            obj   //就是猜你喜欢中循环的每一个对象
        })
    }
}

export default connect()(Main)
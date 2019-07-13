import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'

//引入其他页面组件
import Login from './pages/login/Login'//登录
import Reg from './pages/register/Reg'//注册
import Nav from './pages/nav/Nav/Nav'//导航首页
import Selectcity from './pages/selectcitiy/Seletcity'//选择城市
import Error from './pages/error/Error'//错误
import Forget from './pages/forget/Forget'//忘记密码
import Search from './pages/search/Search'//搜索
import Map from './pages/map/Map'//地图

//引入redux
import store from './store'
import {Provider} from 'react-redux'//// Provider： 数据容器，必须绑定一个store
/* 只要是Provider内的子组件，可以直接共享此store */ 

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Nav}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/selectcity' component={Selectcity}></Route>
                        <Route path='/forget' component={Forget}></Route>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/map' component={Map}></Route>
                        {/* 404 */}
                        <Route path='/error' component={Error}></Route>
                    </Switch>
                </HashRouter>
             </Provider>   
        )
    }
}

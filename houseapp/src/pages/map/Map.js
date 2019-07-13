import React, { Component } from 'react'



export default class Map extends Component {
    // constructor(){
    //     super()
    //     this.state={
    //         currentCity:''
    //     }
    // }
    render() {
        return (
                <div id='myMap' style={{width:'100%',height:'100%'}}></div>
        )
    }
    componentDidMount(){
        //  let _this=this
         var map = new window.AMap.Map("myMap", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
         });
          //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    // var cityinfo = result.city;
                    var citybounds = result.bounds;
                     //定位当前城市
                    //  _this.setState({currentCity:cityinfo})
                    //地图显示当前城市
                     map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
                console.log(result.info);
                
            }
        });
    }
}

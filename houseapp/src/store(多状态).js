import {createStore,combineReducers} from 'redux'

//小的reducer
//姓名
function name(state='张三',action){
      switch(action.type){
          default:return state;
          case 'changeName':return '李四'
      }
}
//年龄
function age(state='18',action){
      switch(action.type){
          default:return state;
           case 'changeAge':return '20'
      }
}
//性别
function sex(state='男',action){
      switch(action.type){
          default:return state;
           case 'changeSex':return '女'
      }
}


let reducers=combineReducers({
    name,
    age,
    sex
})
//创建仓库
const store=createStore(reducers)

//发通知
store.dispatch({
     type:'changeName'
})
store.dispatch({
     type:'changeAge'
})
store.dispatch({
     type:'changeSex'
})

console.log(store.getState());


export default store;
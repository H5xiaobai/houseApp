import {createStore} from 'redux'


const store=createStore(function(state='狗子',action){
       switch(action.type){
           case 'name': return '狗腿子';
           default: return state;
       }
})



//action通知
let a={
   type:'name'
}

//dispatch是发出通知的唯一方式
store.dispatch(a)

console.log(store.getState());


export default store
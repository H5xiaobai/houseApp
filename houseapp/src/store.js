import {createStore,combineReducers} from 'redux'


//小的reducer
function likeHouse(state=[],action){
    //优化去重
    for(let i=0;i<state.length;i++){
          if(state[i].id===action.obj.id){
              state.splice(i,1)
          }
    }
    switch(action.type){
        case 'addHouse': return [action.obj,...state];//后浏览的历史应在最前面，所以将action.obj提前
        default: return state;
    }
}


//组合后的大reducer
let reduxs=combineReducers({
    likeHouse
})


export default createStore(reduxs)
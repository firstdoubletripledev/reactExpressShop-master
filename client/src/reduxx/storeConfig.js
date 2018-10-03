var redux = require('redux');

var dafaultState = {
    SLItemCart:0,
    isLogin:false
}

/*var reducer = (state = dafaultState,action)=>{
    switch(action.type){
        case 'Add_Item_To_Cart':
            return{...state,SLItemCart:state.SLItemCart+1 }
        case 'isLogin':
            return{...state}
        default:
        return state;

    }
}*/
var SLItemCartReducer = (SLItemCart = 0 ,action)=>{
    switch(action.type){
        case 'Get_SLItem_In_Session':
            return action.item  ;
        case 'Add_Item_To_Cart':
            return SLItemCart+1;
        default:
        return SLItemCart;

    }
}

var isLoginReducer = (state = false,action)=>{
    switch(action.type){
        case 'Login_True':
            return !state
        default:
        return state;

    }
}

var reducer = redux.combineReducers({
    SLItemCart:SLItemCartReducer,
    isLogin:isLoginReducer
    
})



var store =redux.createStore(reducer);
store.subscribe(()=> console.log(store.getState()))

//store.dispatch({type:'Add_Item_To_Cart'});  
//store.dispatch({type:'Login_True'});



module.exports = store;
// Reducer

import { CHANGE_TEXT, changeText } from '../action/action';
import { LOGIN, LOGOUT, saveLoginState, saveLogoutState } from '../action/login_actions';

import { combineReducers } from 'redux'

import { storeData } from '../../tools/async-storage'

// 示例 Reducer
const textReducer = (state={text : 'Initial State !!!!!'}, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return { ...state, a: 'Modified a' };
    
        default:
            return state
    }
};


// 登陆状态 Reducer
initialLoginState = {
    isLogin:false,
    user:null
}

const loginReducer = (state=this.initialLoginState, action) => {
    switch (action.type) {
        case LOGIN:
            storeData("app_login",{user: action.user, isLogin: true})
            return { ...state, user: action.user, isLogin: true };
        case LOGOUT:
            storeData("app_login",{user: null, isLogin: false})
            alert("成功退出登陆")
            return { ...state, user: null, isLogin: false };
        default:
            return state
    }
};



// 总 Reducer
const mainReducer = combineReducers({
    text: textReducer,
    login: loginReducer,
})
    
export default mainReducer;

export {
    changeText,
    saveLoginState,
    saveLogoutState,
}
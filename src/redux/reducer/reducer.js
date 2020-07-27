// Reducer

import { CHANGE_TEXT, changeText } from '../action/action';
import { NAVIGATION, navigation } from '../action/navigation_actions';
import { LOGIN, LOGOUT, saveLoginState, saveLogoutState } from '../action/login_actions';

import { combineReducers } from 'redux'



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
            alert("成功登陆")
            return { ...state, user: action.user, isLogin: true };
        case LOGOUT:
            alert("成功退出登陆")
            return { ...state, user: null, isLogin: false };
        default:
            return state
    }
};

// 导航 Reducer
const navigationReducer = (state={path:"Discover"}, action) => {
    switch (action.type) {
        case NAVIGATION:
            return { ...state, path: action.path };
    
        default:
            return state
    }
};


// 总 Reducer
const mainReducer = combineReducers({
    text: textReducer,
    login: loginReducer,
    nav: navigationReducer
})
    
export default mainReducer;

export {
    changeText,
    navigation,
    saveLoginState,
    saveLogoutState,
}
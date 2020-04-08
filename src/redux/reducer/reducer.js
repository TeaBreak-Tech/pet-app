// Reducer

import { CHANGE_TEXT, changeText } from '../action/action';
import { NAVIGATION, navigation } from '../action/navigation_actions';

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
    isLogin:false
}
const loginReducer = (state=this.initialLoginState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return { ...state, a: 'Modified a' };
    
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
}
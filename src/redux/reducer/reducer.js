// Reducer

import { CHANGE_TEXT, changeText } from '../action/action';

const initialState = {
    text : 'Initial State'
};

const mainReducer = (state = initialState, action) => {
    
    //const newState = state;
    //const text = action.text;
    
    // 判断 action 类型
    switch (action.type) {
        case CHANGE_TEXT:
            return { ...state, a: 'Modified a' };
    
        default:
            return state
    }
};
    
export default mainReducer;
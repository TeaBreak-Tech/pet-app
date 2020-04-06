// Redux 用于安全稳定地管理登陆状态等变量

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducer/reducer';


// 创建全局唯一的 Store 对象，用于 Redux 的全局存储
const store = createStore(Reducer);

const StoreProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider


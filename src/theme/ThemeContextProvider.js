// Theme 的控制不采用 redux，因为redux的调用相对繁琐

import React from 'react';

// Themes 文件用于
import Themes from './themes'

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={Themes.light}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
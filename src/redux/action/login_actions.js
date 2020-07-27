// 导航动作 与 导航动作创建器

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const saveLoginState = (user) => ({
    type: LOGIN,
    user
});

export const saveLogoutState = () => ({
    type: LOGOUT,
});
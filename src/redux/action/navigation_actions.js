// 导航动作 与 导航动作创建器

export const NAVIGATION = 'NAVIGATION';

export const navigation = (path) => ({
    type: NAVIGATION,
    path
});
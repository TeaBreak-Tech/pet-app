import {
    PixelRatio,
    Dimensions,
    Platform
} from 'react-native';

// iOS上用于获取状态栏高度
import { NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

// 返回安全区距离顶部的距离，也就是状态栏的高度
export function safeAreaFromTop() {
    return StatusBarManager.HEIGHT;
}

// 返回屏幕宽度
export function screenWidth(){
    return Dimensions.get('window').width
}

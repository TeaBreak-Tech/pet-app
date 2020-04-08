import { StyleSheet } from 'react-native';
import { TabActions } from '@react-navigation/native';

var style_header= StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    searcing_bar:{                  // 搜索框是一个输入框
        height: 36,
        width: 270,                     // 形状
        borderRadius: 18,
        fontSize: 17,
        textAlign:'center',
        paddingTop: 0,
        paddingBottom: 0,
    },
    searcing_bar_searching:{         // 搜索框是一个输入框
        right:5,                        // 偏移
        height: 36,
        width: 300,                     // 形状
        borderRadius: 18,
        fontSize: 17,
        paddingStart: 10,
        paddingTop: 0,
        paddingBottom: 0,
    },
    cancel_button:{         // 取消按钮
        left:5,
        height: 36,
        width: 70,                     // 形状
        borderRadius: 18,
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancel_button_text:{
        fontSize: 15
    },
    messageIcon_temp:{
        left:15,
        width: 36,  
        height: 36,
        borderRadius: 18,
    },
    petIcon_temp:{
        right:15,
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    tab_item:{               // 是一个文本类型
        fontSize:15,
        color:"white"
    },
    tab_item_focused:{               // 是一个文本类型
        fontSize:17,
        color:"white"
    },
    tab_separator:{
        fontSize:20,
        color:"white",
    }
});

export default style_header


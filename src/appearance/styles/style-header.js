import { StyleSheet, BackHandler } from 'react-native';
import { TabActions } from '@react-navigation/native'; 
import {screenWidth} from '../../tools/scale'

var style_header= StyleSheet.create({
    // 中间部分容器，在社区和寻找界面的样式：搜索框+导航条=80
    // 高度为80，但同时也要在main—header-options设置高度为80
    // 中间部分容器，在商城页面的样式：搜索框+圆形选项条=97
    // 其长度不在这里设置，而是跟随内部组件的数量而变化
    center_container:{
        alignItems: 'center',
    },

    // 搜索框的容器，占高48
    searching_bar_container:{
        alignItems: 'center',
        justifyContent:"space-between",
        flexDirection:"row",
        height: 48,
    },
    // 两侧的Touch区域
    sidder:{
        height:48,
        width:70,
        backgroundColor:"blue",
    },
    // 搜索框在正常状态下
    searcing_bar:{                  // 搜索框是一个输入框
        width: screenWidth()*0.6,
	    height: 28,
	    borderRadius: 14,
        fontSize: 17,
        textAlign:'center',
        paddingTop: 0,
        paddingBottom: 0,
    },
    // 搜索框在搜索状态下
    searcing_bar_searching:{         // 搜索框在搜索状态下的样式
        right:5,                        // 偏移
        width: screenWidth()*0.7,
	    height: 28,
	    borderRadius: 14,
        fontSize: 17,
        paddingStart: 10,
        paddingTop: 0,
        paddingBottom: 0,
    },
    // TabBar的容器的样式，高度32，横排，均匀分布
    tab_bar_container:{
        height:32,
    },
    // TabBar选项的总容器
    tab_bar_item_container:{
        width: 71,
        height: 32,
        alignItems:"center",
        justifyContent:"center",
    },
    // TabBar选项的显示容器，要在代码中动态设置borderBottomColor来进行选中提示
    tab_bar_item:{
        width: 36,
        height: 32,
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:2,
    },
    // TabBar选项的文字样式
    tab_bar_item_text:{
	    fontSize: 14,
	    lineHeight: 24,
	    color: "#535353"
    },
    // 搜索取消按钮
    cancel_button:{
        left:5,
        height: 28,
	    borderRadius: 14,
        width: 70,
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center',
	    backgroundColor: "#ffffff",
	    shadowColor: "rgba(0, 0, 0, 0.10)",
	    shadowOffset: {
		    width: 0,
		    height: 2
	    },
	    shadowRadius: 2,
        shadowOpacity: 1,
        elevation:3
    },
    // 搜索取消按钮的字体
    cancel_button_text:{
        fontSize: 14
    },
    messageIcon_temp:{
        left:screenWidth()*0.1,
        width: 36,  
        height: 36,
        borderRadius: 18,
    },
    petIcon_temp:{
        right:screenWidth()*0.1,
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


import { StyleSheet } from 'react-native';
import { TabActions } from '@react-navigation/native';

var style_header= StyleSheet.create({

    // MenuBar选项的文字样式
    menu_item_text:{
        //width: 36,
	    //height: 12,
        //fontFamily: "Source Han Sans CN",
        marginTop:4,
	    fontSize: 11,
	    lineHeight: 20,
	    color: "#535353"
    },

    // 筛选栏
    tool_bar_container:{
        height:40,
        marginHorizontal:18,
        borderBottomWidth:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },






    // Header容器的样式，将左右两个按钮放置边缘
    header_container:{
        height:100,
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"space-between",
    },
    // TabBar的容器的样式，高度32，横排，均匀分布
    tab_bar_container:{
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    // TabBar选项的总容器
    tab_bar_item_container:{
        width: 50,
        height: 60,
        alignItems:"center",
        justifyContent:"center",
    },
    // TabBar选项的显示容器，
    tab_bar_item:{
        width: 50,
        height: 60,
        alignItems:"center",
        justifyContent:"flex-start",
    },
    
    // 搜索栏
    search_bar_container:{
        marginLeft:22,
        marginRight:22,
        flexDirection:"row",
        borderRadius:10,
        justifyContent:"center",
    },
    search_input_searching:{
        flex:1,
        fontSize:17,
        textAlign:'left',
        padding:5,
    },
    search_input_unsearching:{
        flex:1,
        fontSize:17,
        textAlign:"center",
    },
    // 取消键
    cancel_container:{
        height:30,
        width:70,
        alignItems:"center",
        justifyContent:"center",
    }
});

export default style_header


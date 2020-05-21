import { StyleSheet } from 'react-native';

var style_profile_card= StyleSheet.create({
    root_container:{
        backgroundColor:"transparent",
        alignItems:"center",
        justifyContent:"flex-end",
        flexDirection:"column",
    },
    // 头像容器
    profile_container:{
        height:80,
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row",
    },
    // 文字部分容器
    text_container:{
        height:60,
        width:210,
        alignItems:"flex-start",
        justifyContent:"space-around",
    },
    username_text:{
	    fontSize: 16,
	    lineHeight: 27,
	    color: "#ffffff"
    },
    user_id_text:{
	    fontSize: 10,
        lineHeight: 14,
        padding:3,
	    color: "#ffffff"
    },
    user_signature_text:{
	    fontSize: 10,
        lineHeight: 14,
        padding:3,
	    color: "#ffffff"
    },
    // 最右侧部分容器
    right_container:{
        height:60,
        justifyContent:"flex-end"
    },
    // 编辑按钮样式
    edit_button:{
        width: 50,
	    height: 20,
        opacity: 0.6,
        borderRadius:10,
        backgroundColor: "#ffffff",
        alignItems:"center",
        justifyContent:"center",
    },
    edit_button_text:{
        fontSize: 12,
	    lineHeight: 20,
	    color: "#535353"
    },
    // 底部三个选项的总容器
    bottom_contianer:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        width:300,
        height:80,
    },
    // 底部每个选项的容器
    bottom_item_container:{
        width:50,
        height:80,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    },
    // 底部选项数字和文字样式
    bottom_item_digit:{
        fontSize: 20,
	    color: "#ffffff"
    },
    bottom_item_text:{
        fontSize: 12,
	    color: "#ffffff"
    },
    // 底部选项分割线
    bottom_separator:{
        width: 0,
	    height: 30,
	    borderStyle: "solid",
	    borderWidth: 0.7,
	    borderColor: "#ffffff"
    },
});

export default style_profile_card


import { StyleSheet } from 'react-native';
import style_default from './style-defaults'

var style_header= StyleSheet.create({
    
    /* 发现页动态卡片样式 */
    card_container:{
        flex: 1, // 确保两列显示均在屏幕中
        margin: 3,
        borderRadius: 10,
        height: 300,
        ...style_default.shadow,
        },
    image:{
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    profileline_in_imgbg:{
        position:'absolute',
        top:'5%',
        left:'5%',
    },
    prifileline_username_text:{
        fontSize:14,
        lineHeight:24,
        color:"#ffffff",
        shadowColor:"black", // 覆写默认阴影的阴影色
    },
    profileline_avator_wrapper:{
        width:32,
        height:32,
        borderRadius:16,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    },
    item_text:{
        fontSize:14,
        lineHeight:16,
        marginLeft:10,
        marginRight:10,
        marginTop:5,
    },
    second_line_container:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        marginLeft:10,
    },
    tag_text:{
        fontSize:12,
        lineHeight:14,
        marginRight:5,
    },

    view_count_container:{
        position:"absolute",
        bottom:10,
        left:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },

    view_count_text:{
        marginLeft:5,
        fontSize: 12,
        lineHeight: 20,
    },
});

export default style_header


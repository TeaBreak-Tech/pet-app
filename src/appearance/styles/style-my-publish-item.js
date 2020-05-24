import { StyleSheet } from 'react-native';
import { TabActions } from '@react-navigation/native';

// Tools
import {screenWidth} from '../../tools/scale'

var style_header= StyleSheet.create({
    // Header容器的样式，将左右两个按钮放置边缘
    container:{
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    header_container:{
        //flex:1,
        height:40,
        justifyContent: "space-between",
        marginLeft:22,
        marginRight:22,
        flexDirection:"row",
        alignItems:"center",
        //backgroundColor:"green",
    },
    time_text:{
        
    },
    edit_button:{
        height:40,
        width:50,
        //backgroundColor:"blue",
        alignItems:"flex-end",
        justifyContent:"center"
    },
    edit_icon_temp:{
        fontSize:20,
        lineHeight:10,
    },
    center_container:{
        //backgroundColor:"red",
        alignItems: 'center',
    },
    image:{
        borderRadius:5,
        //marginLeft:22,
        width: screenWidth()-44,
	    height: 200,
	    borderRadius: 5,
    },
    bottom_container:{
        //backgroundColor:"blue",
        height:50
    },
    detail_text_container:{
        marginLeft: 22,
        marginTop: 10,
        marginRight: 22,
        //backgroundColor:"blue",
    },
    detail_text:{
        
    },
});

export default style_header


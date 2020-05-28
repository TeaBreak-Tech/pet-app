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
    separator_container:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal:22,
        borderBottomColor: "#adadad",
        borderBottomWidth: 1,
    },
    main_container:{
        marginVertical:10,
        flexDirection: 'row',
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        //backgroundColor:"red"
    },
    left_container:{
        flexDirection:"row",
        alignItems:"center",
    },
    image:{
        //marginLeft:22,
        width: 80,
	    height: 54,
    },
    content_container:{
        marginLeft:10,
        flexDirection:'column'
    },
    sytle_text:{
        fontSize: 14,
	    lineHeight: 20,
    },
    popularity_container:{
        flexDirection:'row',
        alignItems:"center"
    },
    popularity_text:{
        fontSize: 14,
	    lineHeight: 20,
        marginLeft:5,
    },
    share_button_container:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    share_button_text:{
        fontSize: 14,
        lineHeight: 20,
        marginRight:5,
    }
    

    
});

export default style_header


import { StyleSheet } from 'react-native';
import { TabActions } from '@react-navigation/native';

// Tools
import {screenWidth} from '../../tools/scale'

var style_header= StyleSheet.create({
    card_container:{
        flex:1,
        margin:3,
        borderRadius:10,
        height:300,
        shadowColor: "rgba(0, 0, 0, 0.18)",
	    shadowOffset: {
		    width: 0,
		    height: 2
	    },
	    shadowRadius: 3,
	    shadowOpacity: 1
        },
    image:{
        height:200,borderTopLeftRadius:10,borderTopRightRadius:10
    },
    tag_text:{
        fontSize: 12,
        lineHeight: 12,
        marginRight:5,
    },
    second_line_container:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        marginLeft:10,
    },
    third_line_container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:15,
        marginLeft:10,
    },
});

export default style_header


import { StyleSheet } from 'react-native';
import { TabActions } from '@react-navigation/native';

// Tools
import {screenWidth} from '../../tools/scale'

var style_header= StyleSheet.create({
    // Header
    follow_list_item_container:{
        marginLeft:10,
        width: 50,
        height: 60,
        alignItems:"center",
        justifyContent:"flex-start",
    },
    round_profile_wrapper:{
        width: 44,
        height: 44,
        borderRadius:22,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    follow_list_username_text:{
        marginTop:4,
        fontSize: 11,
        lineHeight: 20,
        
    },
    more_indicator:{
        fontSize:30,
        lineHeight:18,
    },
    list_header:{
        height:20
    },

    // Item
    image:{
        width: screenWidth(),
        height: screenWidth(),
        justifyContent:"space-between",
    },
    profileline_container:{
        position:"absolute",
        left:20,
        top:20,
    },
    username_text:{
        fontSize: 14,
        lineHeight: 24,
        color: "#ffffff",
    },
    share_button_container:{
        position:"absolute",
        right:20,
        top:20,
    },
    profile_picture_wrapper:{
        width: 32,
        height: 32,
        borderRadius:16,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
    },
    
    show_comment_indicator:{
        position:'absolute',
        bottom:20,
        right:20,
        width: 26,
	    height: 26,
	    opacity: 0.4,
        backgroundColor: "#464646",
        borderRadius:13,
        alignItems:"center",
        justifyContent:"center",
    },
    show_comment_indicator_text:{
        color:"white",
    },
    content_container:{
        marginTop:5,
        marginLeft:15,
    },
    text:{
        width:270,
        fontSize: 16,
	    lineHeight: 27,
    },
    labels_container:{
        flexDirection:"row",
        alignItems:"center",
    },
    tag_text:{
        fontSize: 12,
        lineHeight: 12,
        marginRight:5,
    },
    bottom_container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginLeft:15,
        height:40,
    },
    view_count_container:{
        flexDirection:"row",
        alignItems:"center",
    },
    view_count_text:{
        marginLeft:5,
        fontSize: 12,
        lineHeight: 20,
    },
    
});

export default style_header


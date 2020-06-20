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
    header_container:{
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    username_text:{
        marginLeft:15,
        fontSize: 14,
        lineHeight: 24,
        color: "#ffffff",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation:3,
    },
    share_button_container:{
        marginRight:16
    },
    profile_picture_shadow:{
        width: 32,
        height: 32,
        borderRadius:16,
        backgroundColor:"white",
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1,
        alignItems:"center",
        justifyContent:"center",
        elevation:3,
    },
    image_footer_container:{
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    show_comment_indicator:{
        width: 26,
	    height: 26,
	    opacity: 0.4,
        backgroundColor: "#464646",
        borderRadius:13,
        marginRight:16,
        alignItems:"center",
        justifyContent:"center",
    },
    show_comment_indicator_text:{
        color:"white"
    },
    first_line_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:5,
    },
    text:{
        marginLeft:16,
        width:270,
        fontSize: 16,
	    lineHeight: 27,
    },
    interaction_bar_container:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    second_line_container:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:16,
    },
    tag_text:{
        fontSize: 12,
        lineHeight: 12,
        marginRight:5,
    },
    third_line_container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginLeft:16,
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


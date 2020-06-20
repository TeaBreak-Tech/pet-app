
import { StyleSheet } from 'react-native';

var style_profile_card= StyleSheet.create({

    edit_title_container:{
        backgroundColor:"white",
        height:50,
        marginTop:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    edit_title_text:{
        marginLeft:30,
        fontSize: 16,
        lineHeight: 23,
        color: "#464646",
    },
    edit_content_container:{
        backgroundColor:"white",
        height:150,
        marginTop:2,
        flexDirection:"row",
    },
    text_editor:{
        flex:1,
        marginLeft:30,
        marginRight:20,
        marginTop:20,
        textAlign:'justify',
    },
    add_label_container:{
        backgroundColor:"white",
        height:50,
    },
    add_label_press:{
        marginLeft:30,
        marginRight:22,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    add_picture_container:{
        backgroundColor:"white",
        height:150,
        marginTop:15,
    },
    add_picture_title:{
        fontSize: 16,
        lineHeight: 23,
        color: "#464646",
        marginLeft:30,
        marginTop:10,
    },
    picture_list:{
        marginLeft:30,
        marginTop:10,
    },
    picture_container:{
        width: 90,
	    height: 90,
	    backgroundColor: "#e0e0e0"
    },
    add_location_container:{
        backgroundColor:"white",
        height:50,
        marginTop:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    add_location_icon:{
        marginLeft:30,
        marginRight:10,
    },
    my_draft_container:{
        backgroundColor:"white",
        height:50,
        marginTop:2,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    my_draft_count_container:{
        width: 20,
	    height: 20,
        backgroundColor: "#de7b76",
        borderRadius:9,
        marginRight:21,
        alignItems:'center',
        justifyContent:'center'
    },
    my_draft_count_text:{
        fontSize: 14,
        lineHeight: 18,
        color: "#ffffff"
    },
    button:{
        width: 240,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#de7b76",
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    buttons_container:{
        marginTop: 20,
        alignItems:'center',
    },
    button_text:{
        fontSize: 16,
        lineHeight: 27,
        color: "#ffffff"
    },


    item_height_container:{
        backgroundColor:"white",
        height:50,
        borderTopWidth:4,
    },
    item_width_container:{
        marginLeft:30,
        marginRight:22,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    title_text:{
        fontSize: 16,
        lineHeight: 23,
        color: "#464646",
    },
    edit_indicator:{
        height:40,
        width:70,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    // 临时的...作为icon
    edit_indicator_icon:{
        color:"#a5a5a5",
        fontSize:30,
        top:-7
    },
    space:{
        height:30
    }
});

export default style_profile_card

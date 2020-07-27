import { StyleSheet } from 'react-native';

var style_profile_card= StyleSheet.create({
    item_height_container:{
        backgroundColor:"white",
        height:50,
        borderTopWidth:4,
        
    },
    item_center:{
        backgroundColor:"white",
        height:50,
        borderTopWidth:4, 
        justifyContent:'center',
        alignItems:'center',
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


import { StyleSheet } from 'react-native';

var style_discussion_screen= StyleSheet.create({
    menu_item:{
        height:30,
        backgroundColor:"#f0f0f0",
        margin:5,
        justifyContent:'center',
    },
    center_content_container:{
        marginHorizontal:18,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    content_left_container:{
        marginLeft:5,
        flexDirection:'row',
        marginTop:10
    },
    index_indicator_text:{
        fontSize: 16,
        lineHeight: 27,
        color: "#707070"
    },
    main_text_container:{
        marginLeft:10,
    },
    title_text:{
        fontSize: 16,
        lineHeight: 27,
    },
    content_text:{
        fontSize: 10,
        lineHeight: 17,
    },
    image:{
        height:70,
        width:110
    },
    separator:{
        height:7,
    }
});

export default style_discussion_screen


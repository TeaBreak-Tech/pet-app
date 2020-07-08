import { StyleSheet } from 'react-native';
import { screenWidth } from '../../tools/scale'

var style_feed_screen= StyleSheet.create({
    item_container:{
        flex:1,
        height:120,
        borderBottomWidth:1,
        justifyContent:"space-between",
    },
    content_container:{
        marginTop:10,
        marginHorizontal:18,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    left_container:{
        marginLeft:5
    },
    title:{
        fontSize: 14,
    },
    detail_text:{
        fontSize: 12,
        lineHeight: 14,
        maxWidth:screenWidth()-110-36-20
    },
    detail_text_whole_line:{
        fontSize: 12,
        lineHeight: 14,
        maxWidth:screenWidth()-36-20
    },
    image:{
        height:70,
        width:110
    },
    interaction_bar:{
        marginHorizontal:18,
    }
});

export default style_feed_screen
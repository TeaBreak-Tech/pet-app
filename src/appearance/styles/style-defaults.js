import { StyleSheet } from 'react-native';

var style_default= StyleSheet.create({
    shadow:{
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 3,
    },
    dark_shadow:{
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.6,
        elevation: 3,
    }
});

export default style_default
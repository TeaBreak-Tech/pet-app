// 用户页

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeText } from '../../redux/action/action'
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = { changeText }

export default connect (
    mapStateToProps
)(class MineScreen extends Component {
    render() {
        const { text } = this.props;
        return (
        <View style={StyleSheet.container}>
            <Text>
                Hello ! This is mine Screen ! {text ||'no text'}
            </Text>
        </View>
    );}
})





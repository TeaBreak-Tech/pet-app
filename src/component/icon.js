import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Platform,
} from "react-native";

import default_styles from '../appearance/styles/style-defaults'

import ViewFillSVG from '../appearance/assets/svg/view_fill'
import Comment1OutlinedSVG from '../appearance/assets/svg/comment1_outlined'
import LikeOutlinedSVG from '../appearance/assets/svg/like_outlined'
import FavoriteOutlinedSVG from '../appearance/assets/svg/favorite_outlined'
import ShareOutlinedWhiteSVG from '../appearance/assets/svg/share_outlined_white'

// class: Icon

const Icon = (props) => {

    let radius = props.radius?props.radius:28 // 外部传入图标半径，默认36
    let Component = props.component?props.component:()=><View/>
    let outer_style = props.style?props.style:{};

    return (
        <View style={[
            // 默认是一个圆形
            {width: radius,
            height: radius,
            borderRadius: radius/2,
            borderWidth: 1,
            borderColor: "gray",
            backgroundColor:"white"},
            outer_style,
        ]}>
            <Component/>
        </View>
    )
    
}

export default connect (
    (state) => {return{path: state.nav.path}}
)(Icon)

// 浏览量图标
export const ViewFill = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <ViewFillSVG width={radius} height={radius}/>
        </View>
    )
}

// 评论量图标
export const CommentOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <Comment1OutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 点赞图标
export const LikeOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <LikeOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 收藏图标
export const FavoriteOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <FavoriteOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 分享图标
export const ShareOutlined = ({ radius }) => {
    radius=radius?radius:28
    let shadow_bg = {
        backgroundColor:'black',
        opacity:0.2,
        borderRadius:radius/2+3,
        height:radius+6,
        width:radius+6,
    }
    return(
        <View style={{justifyContent:'center',alignItems:'center', ...default_styles.dark_shadow}}>
            {Platform.OS==='android'?<View style={{position:'absolute',...shadow_bg}}/>:null}
            <ShareOutlinedWhiteSVG width={radius} height={radius}/>
        </View>
    )
}
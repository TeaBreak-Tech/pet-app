import React from 'react';
import {
    View,
    Platform,
} from "react-native";

import default_styles from '../appearance/styles/style-defaults'

import ViewFillSVG from '../appearance/assets/svg/view_fill'
import Comment1OutlinedSVG from '../appearance/assets/svg/comment1_outlined'
import LikeOutlinedSVG from '../appearance/assets/svg/like_outlined'
import FavoriteOutlinedSVG from '../appearance/assets/svg/favorite_outlined'
import FavoriteOutlinedBasicSVG from '../appearance/assets/svg/favorite_outlined_basic'
import ShareOutlinedWhiteSVG from '../appearance/assets/svg/share_outlined_white'
import CheckinOutlinedSVG from '../appearance/assets/svg/checkin_outlined'
import SettingsOutlinedSVG from '../appearance/assets/svg/settings_outlined'
import NearbyOutlinedSVG from '../appearance/assets/svg/nearby_outlined'
import VPOutlinedSVG from '../appearance/assets/svg/vp_outlined'
import PetOutlinedSVG from '../appearance/assets/svg/pet_outlined'
import AlarmOutlinedSVG from '../appearance/assets/svg/alarm_outlined'
import ShoppingCartBaiscSVG from '../appearance/assets/svg/shopping_cart_basic'
import CommunityIconOutlinedBaiscSVG from '../appearance/assets/svg/icon_community_outlined_basic'
import MineIconOutlinedBaiscSVG from '../appearance/assets/svg/icon_mine_outlined_basic'

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

export default Icon

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
export const FavoriteOutlined = ({ radius, basic }) => {
    radius=radius?radius:28
    SVG = basic?FavoriteOutlinedBasicSVG:FavoriteOutlinedSVG
    return(
        <View style={{}}>
            <SVG width={radius} height={radius}/>
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

// 签到图标
export const CheckinOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <CheckinOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 设置图标
export const SettingsOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <SettingsOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 定位附近图标
export const NearbyOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <NearbyOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 虚拟宠物图标
export const VPOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <VPOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 宠物图标
export const PetOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <PetOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 消息中心图标
export const AlarmOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <AlarmOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 我的商城图标
export const ShoppingCartOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <ShoppingCartBaiscSVG width={radius} height={radius}/>
        </View>
    )
}

export const CommunityIconOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <CommunityIconOutlinedBaiscSVG width={radius} height={radius}/>
        </View>
    )
}

export const MineIconOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <MineIconOutlinedBaiscSVG width={radius} height={radius}/>
        </View>
    )
}
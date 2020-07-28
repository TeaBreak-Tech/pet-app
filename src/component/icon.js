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
import CommunityIconOutlinedSVG from '../appearance/assets/svg/icon_community_outlined'
import CommunityIconFilledBaiscSVG from '../appearance/assets/svg/icon_community_filled'
import FindIconOutlinedSVG from '../appearance/assets/svg/icon_find_outlined.svg'
import FindIconFilledSVG from '../appearance/assets/svg/icon_find_filled.svg'
import MineIconOutlinedBaiscSVG from '../appearance/assets/svg/icon_mine_outlined_basic'
import MineIconOutlinedSVG from '../appearance/assets/svg/icon_mine_outlined'
import MineIconFilledSVG from '../appearance/assets/svg/icon_mine_filled'
import DownOutlinedSVG from '../appearance/assets/svg/down_outlined'
import HotFilledSVG from '../appearance/assets/svg/hot_fill'
import BackOutlinedSVG from '../appearance/assets/svg/back_outlined'
import FilterOutlinedSVG from '../appearance/assets/svg/filter_outlined'
//antiepidemic
import AntiepidemicSVG from '../appearance/assets/svg/antiepidemic'
//vaccine
import VaccineSVG from '../appearance/assets/svg/vaccine'
//certificates
import CertificatesSVG from '../appearance/assets/svg/certificates'
//pet-adopt
import PetAdoptSVG from '../appearance/assets/svg/pet_adopt'
//pet-chip
import PetChipSVG from '../appearance/assets/svg/pet_chip'
//free-survice
import FreeServiceSVG from '../appearance/assets/svg/free_service'

// Rate
import RateActiveSVG from '../appearance/assets/svg/rate_active'
import RateInactiveSVG from '../appearance/assets/svg/rate_inactive'

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

export const CommunityIconOutlinedBasic = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <CommunityIconOutlinedBaiscSVG width={radius} height={radius}/>
        </View>
    )
}

export const CommunityIconOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <CommunityIconOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

export const CommunityIconFilled = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <CommunityIconFilledBaiscSVG width={radius} height={radius}/>
        </View>
    )
}

export const FindIconOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <FindIconOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

export const FindIconFilled = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <FindIconFilledSVG width={radius} height={radius}/>
        </View>
    )
}

export const MineIconOutlinedBasic = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <MineIconOutlinedBaiscSVG width={radius} height={radius}/>
        </View>
    )
}

export const MineIconOutlined = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <MineIconOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

export const MineIconFilled = ({ radius }) => {
    radius=radius?radius:28
    return(
        <View style={{}}>
            <MineIconFilledSVG width={radius} height={radius}/>
        </View>
    )
}

export const DownOutlined = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <DownOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

export const HotFilled = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <HotFilledSVG width={radius} height={radius}/>
        </View>
    )
}

export const FilterOutlined = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <FilterOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

export const BackOutlined = ({ radius, style }) => {
    radius=radius?radius:20
    return(
        <View style={{...style}}>
            <BackOutlinedSVG width={radius} height={radius}/>
        </View>
    )
}

// 寻找页菜单栏的图标

export const Antiepidemic = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <AntiepidemicSVG width={radius} height={radius}/>
        </View>
    )
}

export const Vaccine = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <VaccineSVG width={radius} height={radius}/>
        </View>
    )
}

export const Certificates = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <CertificatesSVG width={radius} height={radius}/>
        </View>
    )
}

export const PetAdopt = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <PetAdoptSVG width={radius} height={radius}/>
        </View>
    )
}

export const PetChip = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <PetChipSVG width={radius} height={radius}/>
        </View>
    )
}

export const FreeService = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <FreeServiceSVG width={radius} height={radius}/>
        </View>
    )
}

// Rate

export const RateActive = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <RateActiveSVG width={radius} height={radius}/>
        </View>
    )
}


export const RateInactive = ({ radius, style }) => {
    radius=radius?radius:28
    return(
        <View style={{...style}}>
            <RateInactiveSVG width={radius} height={radius}/>
        </View>
    )
}
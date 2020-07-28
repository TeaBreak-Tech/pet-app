import React from 'react';
import { View } from "react-native";

import { RateActive, RateInactive } from './icon'

const Rate = ({ radius, style, rate }) => {
    radius=radius?radius:18
    rate = rate?rate:4
    return(
        <View style={{flexDirection:"row",height:40,alignItems:"center",width:120,justifyContent:"space-between", ...style}}>
            {new Array(rate).fill('').map((item, index) => <RateActive radius={radius} key={""+index}/> )}
            {new Array(5-rate).fill('').map((item, index) => <RateInactive radius={radius} key={""+(rate+index)}/> )}
        </View>
    )
}

export default Rate
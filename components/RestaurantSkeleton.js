import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, {Circle, Rect } from 'react-native-svg'


const RestaurantSkeleton = () => {
  return (

    <ScrollView 
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4' >

        <View className='bg-white mr-3 shadow w-64 '>
            <SvgAnimatedLinearGradient duration={1000} height={230} x2='110%' >
                <Rect x="0" y="0" rx="0" ry="0" width="257" height="128"/>
                <Rect x="25" y="141" rx="4" ry="4" width="150" height="20"/>
                <Rect x="25" y="171" rx="4" ry="4" width="50" height="15"/>
                <Rect x="25" y="196" rx="4" ry="4" width="75" height="15"/>
            </SvgAnimatedLinearGradient>  
        </View>

        <View className='bg-white mr-3 shadow w-64 '>
            <SvgAnimatedLinearGradient duration={1000} height={230} x2='110%' >
                <Rect x="0" y="0" rx="0" ry="0" width="257" height="128"/>
                <Rect x="25" y="141" rx="4" ry="4" width="150" height="20"/>
                <Rect x="25" y="171" rx="4" ry="4" width="50" height="15"/>
                <Rect x="25" y="196" rx="4" ry="4" width="75" height="15"/>
            </SvgAnimatedLinearGradient>  
        </View>
    </ScrollView>
    
  )
}

export default RestaurantSkeleton
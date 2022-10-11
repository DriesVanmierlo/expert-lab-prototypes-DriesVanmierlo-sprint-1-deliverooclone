import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, {Circle, Rect } from 'react-native-svg'

const CategorySkeleton = () => {
  return (
        <TouchableOpacity className='mr-2 relative w-20'>
            <SvgAnimatedLinearGradient primaryColor='#eeeeee' secondaryColor='#dddddd' duration={1000} height={80} x2='110%' >
                <Rect x="0" y="0" rx="4" ry="4" width="80" height="80"/>
                <Rect x="5" y="60" rx="4" ry="4" width="50" height="15"/>
            </SvgAnimatedLinearGradient>
        </TouchableOpacity>
  )
}

export default CategorySkeleton
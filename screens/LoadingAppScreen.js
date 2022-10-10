import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const LoadingAppScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 3000);
    }, []);

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image
      source={require("../assets/white-deliveroo-logo.png")}
      animation="slideInUp"
      iterationCount={1}
      className='h-56 w-56 mb-24'
      resizeMode='contain' />

    <Progress.Circle size={60} indeterminate={true} color='white' />

    </SafeAreaView>
  )
}

export default LoadingAppScreen
import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import React from 'react'

const ProgressiveImage = ({
    thumbnailSource,
    source,
    style,
    ...props}) => {

    let thumbnailAnimated = new Animated.Value(0);
    let imageAnimated = new Animated.Value(0);

    function handleThumbnailLoad () {
        Animated.timing(thumbnailAnimated, {
          toValue: 1,
          useNativeDriver: true
        }).start();
      };

    function onImageLoad () {
      Animated.timing(imageAnimated, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    };

  return (
    <View style={styles.container}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[style, { opacity: thumbnailAnimated }]}
          onLoad={handleThumbnailLoad}
          blurRadius={2}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: imageAnimated }, style]}
          onLoad={onImageLoad}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
      container: {
        backgroundColor: '#e1e4e8',
      },
});


export default ProgressiveImage
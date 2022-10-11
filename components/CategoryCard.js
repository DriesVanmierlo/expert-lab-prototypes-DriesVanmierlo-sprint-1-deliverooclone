import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import ProgressiveImage from './ProgressiveImage';

const CategoryCard = ({title, imgUrl}) => {
  return (
    <TouchableOpacity className='mr-2 relative'>
        {/* <Image source={{
            uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
        /> */}
        <ProgressiveImage
          className="h-20 w-20 rounded"
          thumbnailSource={{ uri: imgUrl }}
          source={{ uri: imgUrl }}
          style={{ }}
          resizeMode="cover"
        />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
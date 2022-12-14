import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import { TextInput } from 'react-native-gesture-handler';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';
import RestaurantSkeleton from '../components/RestaurantSkeleton';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);
    const [restaurantsAreLoaded, setRestaurantsAreLoaded] = useState(false);
    const [hideData, setHideData] = useState(true);
    const [hidden, setHidden] = useState('hidden');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient.fetch(`
       *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
        },
      }
       `).then((data) => {
        setTimeout(()=>{
            setFeaturedCategories(data);
            setRestaurantsAreLoaded(true);
            setTimeout(() => {
                setHideData(false);
                setHidden('');
            }, 1000);
        }, 2000);
       })   
    }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>
        {/* HEADER */}

        <View className='flex-row pb-3 items-center mx-4 space-x-2 mt-3'>
            <Image
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>
                    Deliver Now!
                </Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB" />
        </View>


        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                <MagnifyingGlassIcon size={20} color="gray" />
                <TextInput
                    placeholder='Restaurants and cuisines' 
                    keyboardType='default' 
                />
            </View>

            <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* BODY */}

        <ScrollView 
            className='bg-gray-100 flex-1'
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            {/* Categories */}
            <Categories />
            
            {/* Featured Rows */}

            {/* {restaurantsAreLoaded ? featuredCategories?.map((category) => (
                <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
            />
            )) : <View className='pt-2'><RestaurantSkeleton /><RestaurantSkeleton /><RestaurantSkeleton /></View> } */}

            {restaurantsAreLoaded && featuredCategories.map((category) => (
                <View className={hidden}>
                  <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />  
                </View>
                
            ))}

            {hideData && <View className='pt-2'><RestaurantSkeleton /><RestaurantSkeleton /><RestaurantSkeleton /></View>}


        </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
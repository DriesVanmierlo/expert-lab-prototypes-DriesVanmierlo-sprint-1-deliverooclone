import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../sanity';
import CategorySkeleton from './CategorySkeleton';

const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [categoriesAreLoaded, setCategoriesAreLoaded] = useState(false);

  let categoriesPlaceholders = ["Thais", "Japanese", "Pizza", "Burgers", "Asian", "Healthy"];

  useEffect(() => {
    
    sanityClient.fetch(`
    *[_type == "category"]
    `).then((data) => {
      setTimeout(() => {
      setCategories(data);
      setCategoriesAreLoaded(true);
      }, 1000);
    });
  }, []);

  return (
    <ScrollView 
    contentContainerStyle={{paddingHorizontal: 15,
    paddingTop: 10}}
    horizontal
    showsHorizontalScrollIndicator={false}>

      

        {/* CategoryCard */}

        {categoriesAreLoaded ? categories?.map((category) => (
          <CategoryCard key={category._id} title={category.name} imgUrl={urlFor(category.image).width(200).url()} />
        )) : categoriesPlaceholders.map((placeholder)=>(
          <CategorySkeleton />
        )) }
        
    </ScrollView>
  );
};

export default Categories;
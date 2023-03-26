import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'

const CategoriesCard = ({imgUrl}) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image 
      source={{
        uri: imgUrl
      }}

      className='h-20 w-20 rounded'
       />
       <Text className='absolute bottom-1 left-1 text-white'>SORRY</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard
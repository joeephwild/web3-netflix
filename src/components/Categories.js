import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10
    }}
    >
    <CategoriesCard imgUrl='https://links.papareact.com/gn7' />
    <CategoriesCard imgUrl='https://links.papareact.com/gn7' />
    <CategoriesCard imgUrl='https://links.papareact.com/gn7' />
    <CategoriesCard imgUrl='https://links.papareact.com/gn7' />
    <CategoriesCard imgUrl='https://links.papareact.com/gn7' />
    <CategoriesCard imgUrl='https://links.papareact.com/gn7' />
    </ScrollView>
  )
}

export default Categories
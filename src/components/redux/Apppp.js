import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import Header from '../Header';
import Product from '../Product';

export default function Apppp() {
  const products = [
    {
      name: 'samsung',
      prise: 15000,
      images:
        'https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png',
    },
    {
      name: 'Apple',
      prise: 150000,
      images:
        'https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png',
    },
    {
      name: 'Nokia',
      prise: 1500,
      images:
        'https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png',
    },
  ];
  return (
    <View>
      <Header />
      <ScrollView>
        {products.map(items => (
          <Product items={items} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
  },
  prise: {},
  iimage: {
    width: 200,
    height: 200,
  },
});

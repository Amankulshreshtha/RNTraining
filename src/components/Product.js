import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {ADD_TO_CART} from './actions/constants';
import {useDispatch} from 'react-redux';
import {addtocart} from './actions/action';

const Product = props => {
  const items = props.items;

  const dispatch = useDispatch();
  const handleAddToCart = items => {
    console.warn('called', items);
  };
  dispatch(addtocart(items));
  return (
    <View style={styles.maincantainer}>
      <View>
        <Text style={styles.name}> {items.name}</Text>
        <Text style={styles.prise}> {items.prise}</Text>
        <Image style={styles.iimage} source={{uri: items.images}} />
        <Button title="Add to Cart" onPress={handleAddToCart(items)} />
      </View>
    </View>
  );
};

export default Product;
const styles = StyleSheet.create({
  iimage: {
    width: 200,
    height: 200,
  },
  maincantainer: {
    alignItems: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 4,
    padding: 10,
  },
});

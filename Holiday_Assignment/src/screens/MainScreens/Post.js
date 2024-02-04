// PostScreen.js

import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../../redux/actions/actions'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Post = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChooseImage = async (fromCamera = false) => {
    const options = {
      mediaType: 'photo',
    };

    if (fromCamera) {
      launchCamera(options, handleImageResponse);
    } else {
      launchImageLibrary(options, handleImageResponse);
    }
  };

  const handleImageResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const selectedImage = response.assets
        ? response.assets[0]
        : response.image
        ? { image: response.image }
        : null;

        // console.log(response);
      if (selectedImage) {
        setSelectedImage(selectedImage.uri);
      } else {
        console.log('Invalid image response format');
      }
    }
  };

  const handlePostData = async () => {
    if (selectedImage && user.length > 0 && user[0].id) {
      try {
        await dispatch(postData(selectedImage, user[0].id));
      } catch (error) {
        console.error('Error posting data:', error);
      }
    } else {
      console.log('Selected image or user data is missing');
    }
  };
  

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Choose Image" onPress={() => handleChooseImage(false)} />
        <Button title="Take Photo" onPress={() => handleChooseImage(true)} />
        <Button title="Post" onPress={handlePostData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default Post;

import React, {useState} from 'react';
import {View, Button, Image, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {postData} from '../../redux/actions/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Post = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageData, setSelectedImageData] = useState(null);

  const handleChooseImage = async (fromCamera = false) => {
    const options = {
      mediaType: 'photo',
    };

    try {
      if (fromCamera) {
        launchCamera(options, handleImageResponse);
      } else {
        launchImageLibrary(options, handleImageResponse);
      }
    } catch (error) {
      console.log('Error launching camera or image library:', error);
    }
  };

  const handleImageResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const selectedImage = response.assets
        ? response.assets[0]
        : response.image
        ? {image: response.image}
        : null;

      if (selectedImage) {
        setSelectedImage(selectedImage.uri);
        // Convert image URI to base64
        convertImageToBase64(selectedImage.uri);
      } else {
        console.log('Invalid image response format');
      }
    }
  };

  const convertImageToBase64 = uri => {
    if (uri) {
      // Fetch the image data
      fetch(uri)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64Data = reader.result;
            setSelectedImageData(base64Data);
          };
          reader.readAsDataURL(blob);
        })
        .catch(error => {
          console.error('Error converting image to base64:', error);
        });
    }
  };

  const handlePostData = async () => {
    if (selectedImageData && user.length > 0 && user[0].id) {
      try {
        // Dispatch action to post data
        await dispatch(postData(selectedImageData, user[0].id));
        // Show success popup
        Alert.alert(
          'Success',
          'Data successfully uploaded!',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
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
        <Image source={{uri: selectedImage}} style={styles.selectedImage} />
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

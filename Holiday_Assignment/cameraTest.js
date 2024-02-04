import React from 'react';
import { View, Button } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function CameraTest() {
  const openPicker = () => {
    const options = {
      mediaType: 'photo', // Specify the media type, you can also use 'video'
      includeBase64: false, // Set to true if you want the result as a base64-encoded string
    };

    // Launch the image picker
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Selected image data is available in response
        console.log('Image URI:', response.uri);
        console.log('Image Type:', response.type);
        console.log('Image Name:', response.fileName);
        console.log('Image Size:', response.fileSize);

        // Handle the selected image here, you can set it to state or perform other actions
      }
    });
  };

  return (
    <View>
      <Button title="Pick Image" onPress={openPicker} />
    </View>
  );
}

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import {useRef, useSyncExternalStore} from 'react';
import React, {useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionSheet from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';

//import 'react-native-gesture-handler';

const demoCam = () => {
  const cameraRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [flash, setFlash] = useState('off');
  const [name, setName] = useState('');
  const [selected, setSelected] = useState(' ');
  const [camera_type, setCamera_Type] = useState('front');
  const [Image, setImage] = useState();

  const actionSheetRef = useRef(null);

  const handlecaptured = async () => {
    cameraRef.current.capture();
  };
  const handleFlipCamera = () => {
    setCamera_Type(camera_type == 'front' ? 'back' : 'front');
  };
  const handleFlash = () => {
    setFlash(flash == 'off' ? 'on' : 'off');
  };

  const OpenCamera = () => {
    setModalVisible(true);
  };
  const OpenPicker = () =>
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  return (
    <View style={{backgroundColor: 'grey', flex: 1}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white',
        }}>
        Welcome
      </Text>

      <View style={styles.iconHead}>
        <TouchableOpacity
          style={{borderRadius: 130, borderWidth: 5, backgroundColor: 'red'}}>
          <Icon name="account" size={100} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'auto',
            position: 'absolute',
          }}
          onPress={() => {
            actionSheetRef.current?.show();
          }}>
          <View style={{marginTop: 50, marginLeft: 90}}>
            <Icon name="image-plus" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.UserHead}>
        <TextInput placeholder="Enter Your Name" style={styles.UserName} />

        <TextInput placeholder="Enter Your Email" style={styles.UserName} />
      </View>

      <View style={styles.SelectButton}>
        <TouchableOpacity style={styles.buttonOpen} onPress={OpenCamera}>
          <Text style={styles.textStyle}> select Image </Text>
        </TouchableOpacity>
      </View>

      <ActionSheet ref={actionSheetRef}>
        <View style={styles.ImagePlus}>
          <TouchableOpacity onPress={OpenCamera}>
            <Text
              style={{
                marginTop: 5,
                backgroundColor: 'skyblue',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                borderRadius: 30,
              }}>
              <Icon name="camera" size={60} color="black" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={OpenPicker}>
            <Text
              style={{
                marginTop: 5,
                backgroundColor: 'skyblue',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                borderRadius: 30,
              }}>
              <Icon name="image" size={60} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>

      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={false}
          Visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal closed');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Camera
                style={{height: '85%', width: '100%', backgroundColor: 'black'}}
                ref={cameraRef}
                // ref={ref => (this.camera = ref)}
                cameraType={camera_type}
                flashMode={flash}
              />
              <View style={styles.captureButtonContainer}>
                <TouchableOpacity
                  onPress={handleFlipCamera}
                  style={styles.IconBack}>
                  <Icon name="camera" size={40} color="black" />
                  <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handlecaptured}
                  style={styles.IconCamera}>
                  <Icon name="camera-switch" size={40} color="black" />
                  <Text>Click</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.IconFlash}
                  onPress={handleFlash}>
                  <Icon name="flash-auto" size={40} color="black" />
                  <Text>Flash</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default demoCam;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    //elevation: 4,
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    //elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'blue',
    width: '50%',
    padding: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonClose2: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyl: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  centeredView: {
    flex: 1,
    backgroundColor: 'pink',
  },
  modalView: {
    borderRadius: 20,
    alignItems: 'center',
  },
  captureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconHead: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  SelectButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  UserName: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'red',
    width: '90%',
    padding: 10,
  },
  UserHead: {
    alignItems: 'center',
  },
  ImagePlus: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

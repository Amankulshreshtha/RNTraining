import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Profile = ({navigation}) => {
  const [registerUserData, setRegisterUserData] = useState(null);

  const editProfile = () => {
    navigation.navigate('Update_Profile');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          'https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109dd/post',
          {
            headers: {
              'Content-Type': 'application/json',
              'app-id': '659d663b3089b3d68c223c8d',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setRegisterUserData(data);
        } else {
          console.error('Error fetching user data:', response.status);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    fetchUserData();
  }, []);

  const renderPosts = ({item}) => (
    console.log('Item', item),
    (
      <View style={styles.postContainer}>
        {item.image && <Image source={{uri: item.image}} style={styles.box} />}
      </View>
    )
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.img}
          source={{uri: registerUserData?.data[0]?.owner.picture}}
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            fontWeight: '600',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          {registerUserData?.data[0]?.owner.firstName} {''}
          {registerUserData?.data[0]?.owner.lastName}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={editProfile} style={{marginVertical: 10}}>
          <Text style={styles.btnTxt}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          {registerUserData?.data?.length}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          Posts
        </Text>
      </View>

      <View style={styles.hLine}></View>

      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'Poppins',
            color: '#000000',
          }}>
          Posts
        </Text>

        <View style={styles.boxContainer}>
          <FlatList
            data={registerUserData?.data}
            keyExtractor={post => post.id}
            renderItem={renderPosts}
            numColumns={3}
            columnWrapperStyle={styles.postContainer}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor:'green',
  },

  userContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center',
  },

  img: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },

  btnContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#1C6758',
  },

  btnTxt: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  hLine: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey.+',
    marginVertical: 10,
  },

  boxContainer: {
    marginTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    //  flexWrap: 'wrap',
  },

  postContainer: {
    flex: 1,
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    //  backgroundColor:'green',
  },

  box: {
    height: 100,
    width: '90%',
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: 'black',
  },
});

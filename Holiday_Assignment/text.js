import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  
  const Profile = () => {
    const [registerUserData, setRegisterUserData] = useState(null);
  
    const editProfile = () => {
      console.log('asdsas', registerUserData.data[0].image);
    };
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            'https://dummyapi.io/data/v1/user/60d0fe4f5311236168a10a0b/post',
            {
              headers: {
                'Content-Type': 'application/json',
                'app-id': '65b9f249af8a80c525603fda',
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
      <ScrollView style={styles.mainContainer}>
        <View style={styles.userContainer}>
          <Image
            style={styles.img}
            source={{uri: registerUserData?.data[0]?.owner.picture}}
          />
          <Text
            style={{
              fontSize: 18,
              marginLeft:10,
              fontWeight: '600',
              fontFamily: 'Poppins',
              color: '#000000',
            }}>
            {registerUserData?.data[0]?.owner.firstName} {''}
            {registerUserData?.data[0]?.owner.lastName}
          </Text>
        </View>
  
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={renderPosts} style={{marginVertical:10}}>
            <Text
              style={styles.btnTxt}>
              Edit Profile
            </Text>
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
            />
          </View>
        </View>
      </ScrollView>
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
      marginBottom:10,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent:'center',
    },
  
    img: {
      height: 70,
      width: 70,
      borderRadius: 100,
    },
  
    btnContainer:{
      width:'100%',
      marginBottom:10,
      borderRadius:10,
      backgroundColor: '#1C6758',
    },
  
    btnTxt:{
      fontSize: 12,
      fontFamily:'Poppins',
      fontWeight:'600',
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
     //  justifyContent: 'space-between',
    // flexWrap: 'wrap',
    },
  
    postContainer: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent: 'space-between', 
      //  backgroundColor:'green',
    },
  
    box: {
      height: 100,
      width: '35%', // Adjust width as needed
      marginVertical: 5, // Adjust vertical margin as needed
      borderRadius: 10,
      borderWidth: 1,
      // borderColor: 'black',
    },
  });